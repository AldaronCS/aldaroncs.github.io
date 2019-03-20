# CSS Animations: Step 1
Firstly, we are going to review how to change color of an element on hover.  This will turn a red
rectangle green on mouseover.  Add the following `div` to your HTML.

```html
<div class="animation">
</div>
```

And add the following to your CSS file.

```css
.animation {
	width: 300px;
	height: 300px;
	background-color: #FF0000;
}

.animation:hover {
	background-color: #00FF00;
}
```

## Step 2: Transition Animations
Next, we're going to make the color transition smooth using _*transitions*_.  We're going to add
2 properties to our `animation` class:

```css
.animation {
	width: 300px;
	height: 300px;
	background-color: #FF0000;
	transition-timing-function: linear;
	transition-duration: 2s;
}
```

Try changing `linear` to `ease` and see how it changes.  Also make the animation slower or faster.
Try `transition-duration: 0.5s` for half second or `5s` for 5 seconds.

# Step 3: Keyframe Animations
We are going to make a face on a field move around so we need to add a few more classes to our CSS.

```css
.field {
	image-align: left;
	width: 500px;
	height: 500px;
	background-color: #A0FFA0;
}

.face {
	float: left;
	position: relative;
	width: 100px;
	height: 100px;
	background: url("https://aldaroncs.github.io/face.svg");
	top: 0px;
	left: 0px;
}
```

And then we need to add it to our HTML.

```html
<div class="field">
	<div class="face"></div>
</div>
```

## Bouncing!
Add an animation to your CSS file:

```css
@keyframes animation {
	0%   {top:0px; left:0px}
	50%  {top:400px; left:400px}
	100% {top:0px; left:0px}
}
```

And then add the following properties to your `face` class in your CSS file:
```css
	animation-name: animation;
	animation-duration: 4s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
```

Next try changing `linear` to `ease`.

## Expressions!
Update your animation to change facial expressions.

```css
@keyframes animation {
	0%   {top:0px; left:0px; background: url("https://aldaroncs.github.io/face.svg")}
	20%  {top:400px; left:400px; background: url("https://aldaroncs.github.io/face.svg")}
	40%  {top:400px; left:400px; background: url("https://aldaroncs.github.io/face2.svg")}
	60%  {top:400px; left:400px; background: url("https://aldaroncs.github.io/face.svg")}
	80%  {top:0px; left:0px; background: url("https://aldaroncs.github.io/face.svg")}
	100% {top:0px; left:0px; background: url("https://aldaroncs.github.io/face2.svg")}
}
```

# Next
[JavaScript!](js)
