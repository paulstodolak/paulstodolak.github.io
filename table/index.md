---
layout: default
---

# Hello Table Filter
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
App JS
```javascript
var JACKNIFE = JACKNIFE || {};

(function( $ ) {
	$( document ).ready(function() {
		$('.table-filter, .table-sort').each(function() {
			var TableController = new JACKNIFE.TableController($(this));
			TableController.init();
			$(this).data('TableController', TableController);
		});
	});
})( jQuery );
```
JS
```javascript
(function( $ ) {
	var TableController = JACKNIFE.TableController = function TableController(el) {

		// Elements
		var $el              = $(el);
		var $body            = $('tbody', $el);
		var $sort_triggers   = $('.sort-trigger', $el);
		var $filter_triggers = $('select[data-filter-table="' + $el.attr('id') + '"]');

		// Variables
		var sort_direction = 'DESC';
		var sort_type      = 'default';
		var date_format    = ($el.data('date-format') ? $el.data('date-format').toUpperCase() : 'DMY');
		var original_rows  = $('tr', $body).toArray();
		var selected_rows  = original_rows;

		// Public Functions
		this.init = function() {
			// Initialize Sorters
			if ($sort_triggers) {
				// Set listeners
				$sort_triggers.on('click', _sort_click);

				// Set initial sort
				var $target = $('.sort-trigger.active', $el);
				if ($target) {
					var index = $target.index();

					//_set_sort_direction($target);
					_set_sort_type($target);
					selected_rows = _sort_rows(selected_rows, index);
					_update_table(selected_rows);
				}
			}

			// Initialize Filters
			if ($filter_triggers) {
				// Set listeners
				$filter_triggers.on('change', _filter_change);
			}
		}

		// Private Functions
		var _sort_click = function(e) {
			e.preventDefault();

			var $target = $(this);
			var index   = $target.index();

			_set_sort_direction($target);
			_set_sort_type($target);
			selected_rows = _sort_rows(selected_rows, index);
			_update_table(selected_rows);
		}

		var _filter_change = function(e) {
			e.preventDefault();

			var $trigger = $(this);
			// Filter the rows
			selected_rows = _filter_rows();
			// Sort the rows
			var $sort_target = $('.sort-trigger.active', $el);
			if ($sort_target) {
				var index = $sort_target.index();
				selected_rows = _sort_rows(selected_rows, index);
			}

			_update_table(selected_rows);
		}

		var _sort_rows = function(rows, index) {
			// Sort the rows
			// Determine the order
			rows = rows.sort(_compare_cells(index));
			// Determine the direction
			if (sort_direction === 'DESC') {
				rows = rows.reverse();
			}

			return rows;
		}

		var _filter_rows = function() {
			var rows = new Array();

			for (var i = 0; i < original_rows.length; i++) {
				// Default state is to add the row
				var add_row = true;
				// Loop through Select fields and their selected values to find a reason not to add the row
				$filter_triggers.each(function() {
					// Find a reason not to add the row
					var $trigger   = $(this);
					var column     = $trigger.data('filter-column');
					var values     = (Array.isArray($trigger.val()) ? $trigger.val() : new Array($trigger.val()));
					var target     = _get_cell_value(original_rows[i], column);
					var is_default = (values[0] === null || $.inArray('default', values) != -1 ? true : false);
					var is_match   = ($.inArray(target, values) != -1 ? true : false);

					// If the Select field does not match the default state (no value, or 'default' selected)
					// If the target does not match a selected value
					if (!is_default && !is_match) {
						add_row = false;
					}
				});
				// Add row if it didn't conflict with any selected values on all filters
				if (add_row === true) {
					rows.push(original_rows[i]);
				}
			}
			return rows;
		}

		var _set_sort_direction = function($target) {
			// Determine if the sort direction is ASC or DESC
			if ($target.hasClass('active')) {
				if ($target.hasClass('sort-asc')) {
					$target.removeClass('sort-asc');
					$target.addClass('sort-desc');
					sort_direction = 'DESC';
				}else if ($target.hasClass('sort-desc')) {
					$target.removeClass('sort-desc');
					$target.addClass('sort-asc');
					sort_direction = 'ASC';
				}
			}else {
				$sort_triggers.removeClass('active sort-desc sort-asc');
				$target.addClass('active sort-desc');
				sort_direction = 'DESC';
			}
		}

		var _set_sort_type = function($target) {
			// Set the type of sorting
			// 'date' and 'default' accepted
			// 'default' covers alphanumeric
			if ($target.data('sort')) {
				sort_type = $target.data('sort');
			}else {
				sort_type = 'default';
			}
		}

		var _compare_cells = function(index) {
			return function(a, b) {
				// Get the value of the cell
				var valA = _get_cell_value(a, index);
				var valB = _get_cell_value(b, index);

				if (sort_type === 'date') {
					// Sort by Date
					valA = _format_date(valA);
					valB = _format_date(valB);
					return valA - valB;
				}else if ($.isNumeric(valA) && $.isNumeric(valB)) {
					// Sort by Number
					return valA = valB;
				}else {
					// Sort by Alphabet
					valA = valA.toString();
					valB = valB.toString();
					return valA.localeCompare(valB);
				}
			}
		}

		var _get_cell_value = function(row, index) {
			// Get the value of the cell
			return $('td', row).eq(index).text();
		}

		var _format_date = function(str) {
			// Standardize the dates regardless of format
			var date;
			var day;
			var month;
			var year;

			// Remove special characters from the beginning and end of the string
			str = str.toLowerCase();
			str = str.replace(/^[^a-z0-9]*/, '');
			str = str.replace(/[^a-z0-9]*$/, '');
			// Return if all characters have been removed
			if (str.length < 1) return;
			// Change any special characters to a comma
			str = str.replace(/[^a-z0-9]+/g, ',');

			date = str.split(',');
			// Return if there aren't enough values for DMY
			if (date.length < 3) return;
			// Match the array to the chosen Date format
			for (var i = 0; i < 3; i++) {
				var target = date_format.substr(i, 1);
				if (target === 'D') {
					day = date[i];
				}else if (target === 'M') {
					month = date[i];
				}else if (target === 'Y') {
					year = date[i];
				}
			}

			// Remove 0 from the start of the number to prevent double 0 for numbers 1-9
			// Add 0 to the start of numbers 1-9
			day = day.replace(/^0/, '');
			if (day < 10) day = '0' + day;

			// If the month is an a-z string, swap it for a number
			var pattern = /[a-z]/;
			if (pattern.test(month)) {
				// Convert month to 3 character string
				month = month.substr(0, 3);
				// Convert 3 character string to number
				switch (month) {
					case 'jan' : month = String(1); break;
					case 'feb' : month = String(2); break;
					case 'mar' : month = String(3); break;
					case 'apr' : month = String(4); break;
					case 'may' : month = String(5); break;
					case 'jun' : month = String(6); break;
					case 'jul' : month = String(7); break;
					case 'aug' : month = String(8); break;
					case 'sep' : month = String(9); break;
					case 'oct' : month = String(10); break;
					case 'nov' : month = String(11); break;
					case 'dec' : month = String(12); break;
					default    : month = String(0);
				}
			}

			// Remove 0 from the start of the number to prevent double 0 for numbers 1-9
			// Add 0 to the start of numbers 1-9
			month = month.replace(/^0/, '');
			if (month < 10) month = '0' + month;

			// If the year if 2 digits instead of 4, add 2000 to make it 4 digits
			year = parseInt(year);
			if (year < 100) year = parseInt(year) + 2000;

			return '' + String(year) + '' + String(month) + '' + String(day) + '';
		}

		var _update_table = function(rows) {
			// Draw the rows
			$body.empty();
			for (var i = 0; i < rows.length; i++) {
				$body.append(rows[i]);
			}
		}
	}
})( jQuery );
```
CSS
```sass
table {
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
	.sort-trigger {
		span {
			padding-right: 0.75rem;
			position: relative;
		}
		&.active {
			&.sort-asc,
			&.sort-desc {
				span:after {
					content: '';
					width: 0;
					height: 0;
					border-style: solid;
					display: block;
					position: absolute;
					right: 0;
					top: 50%;
					@include transform(translate(0, -50%));
				}
			}
			&.sort-asc {
				span:after {
					border-width: 0 0.25rem 0.25rem 0.25rem;
					border-color: transparent transparent $black transparent;
				}
			}
			&.sort-desc {
				span:after {
					border-width: 0.25rem 0.25rem 0 0.25rem;
					border-color: $black transparent transparent transparent;
				}
			}
		}
		&:hover {
			cursor: pointer;
		}
	}
}

table, th, td {
	border: 1px solid $black;
}
```
HTML
```html
<select data-filter-table="MealPlanTable" data-filter-column="1">
	<option value="default">All Meals</option>
	<option value="Breakfast">Breakfast</option>
	<option value="Brunch">Brunch</option>
	<option value="Lunch">Lunch</option>
	<option value="Dinner">Dinner</option>
</select>
<select data-filter-table="MealPlanTable" data-filter-column="2" multiple>
	<option value="default">All Diets</option>
	<option value="Omnivorous">Omnivorous</option>
	<option value="Pescatarian">Pescatarian</option>
	<option value="Vegetarian">Vegetarian</option>
	<option value="Vegan">Vegan</option>
</select>
<table id="MealPlanTable" class="table-sort table-filter" data-date-format="MDY">
	<thead>
		<tr>
			<th class="sort-trigger"><span>Recipe</span></th>
			<th class="sort-trigger"><span>Meal</span></th>
			<th class="sort-trigger"><span>Diet</span></th>
			<th class="sort-trigger sort-asc active" data-sort="date"><span>Date</span></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Assorted Cereal w/ Almond Milk</td>
			<td>Breakfast</td>
			<td>Vegan</td>
			<td>07-19-18</td>
		</tr>
		<tr>
			<td>Eggs Benedict</td>
			<td>Brunch</td>
			<td>Omnivorous</td>
			<td>07/17/17</td>
		</tr>
		<tr>
			<td>Pheasant Pot Pie</td>
			<td>Dinner</td>
			<td>Omnivorous</td>
			<td>17/12/17</td>
		</tr>
		<tr>
			<td>Warm Lentil and Beet Salad</td>
			<td>Dinner</td>
			<td>Vegan</td>
			<td>July 5, 2018</td>
		</tr>
		<tr>
			<td>Wild Mushroom Risotto</td>
			<td>Dinner</td>
			<td>Vegetarian</td>
			<td>July 5, 2017</td>
		</tr>
		<tr>
			<td>Grilled Chicken and Avocado Club Sandwich</td>
			<td>Lunch</td>
			<td>Omnivorous</td>
			<td>July 4, 2017</td>
		</tr>
		<tr>
			<td>Smoked Salmon Sandwich</td>
			<td>Lunch</td>
			<td>Pescatarian</td>
			<td>July 4, 2018</td>
		</tr>
		<tr>
			<td>Grilled Cheese</td>
			<td>Lunch</td>
			<td>Vegetarian</td>
			<td>July 3, 2018</td>
		</tr>
	</tbody>
</table>
```
## Examples
- [Example 01](examples/01)

## Known Issues
- Filters do not have a state for no results

## Browser Support

## License

[back]({{ site.url }}/)