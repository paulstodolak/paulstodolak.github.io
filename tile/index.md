---
layout: default
---

# Hello Tile
[back]({{ site.url }}/)

## Description

## Authors
- Paul Stodolak / Jacknife Design

## Dependancies

## Options

## Code
CSS
```sass
.flex-wrap {
	width: 100%;
	display: flex;
	flex-wrap: nowrap;
	.flex-col {
		width: 100%;
		@extend %clearfix;
	}
}

.flex-wrap {
	.flex-col:first-child {
		.tile-wrap {
			float: right;
		}
	}
}

.tile-wrap {
	width: 100%;
	max-width: 500px;
	height: 100%;
}

.tile {
	width: 100%;
	height: auto;
	position: relative;
	overflow: hidden;
	box-sizing: border-box;
	img {
		display: block;
		width: 100%;
		height: auto;
	}
}
@media screen and (max-width: 500px) {
	.flex-wrap {
		flex-wrap: wrap;
	}
}
```
HTML
```html
<div class="flex-wrap">
	<div class="flex-col">
		<div class="tile-wrap">
			<div class="tile">
				<img src="../../../images/500-500_01.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="flex-col">
		<div class="tile-wrap">
			<div class="tile">
				<img src="../../../images/500-250_02.jpg" alt="">
			</div>
			<div class="tile">
				<img src="../../../images/500-250_03.jpg" alt="">
			</div>
		</div>
	</div>
</div>
<div class="flex-wrap">
	<div class="flex-col">
		<div class="tile-wrap">
			<div class="tile">
				<img src="../../../images/500-250_04.jpg" alt="">
			</div>
			<div class="tile">
				<img src="../../../images/500-250_05.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="flex-col">
		<div class="tile-wrap">
			<div class="tile">
				<img src="../../../images/500-500_06.jpg" alt="">
			</div>
		</div>
	</div>
</div>
<div class="flex-wrap">
	<div class="flex-col">
		<div class="tile-wrap">
			<div class="tile">
				<img src="../../../images/500-500_07.jpg" alt="">
			</div>
		</div>
	</div>
	<div class="flex-col">
		<div class="tile-wrap">
			<div class="tile">
				<img src="../../../images/500-250_08.jpg" alt="">
			</div>
			<div class="tile">
				<img src="../../../images/500-250_09.jpg" alt="">
			</div>
		</div>
	</div>
</div>
```

## Examples
- [Example 01](examples/01)

## Known Issues

## Browser Support

## License

[back]({{ site.url }}/)