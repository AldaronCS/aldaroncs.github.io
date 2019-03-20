# JavaScript
Like CSS, you usually put JavaScript in a separate file.  Make a file `script.js`.

```js
// This is a function.
function doSomething() {
	alert("Hello, World");
}
```

Add to your HTML under head: `<script href="script.js"></script>`

Example:
```html
<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>My Website</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
	<script src="script.js"></script>
</head>
<body>
	...
</body>
```

The line where you have:
```html
<div class="field">
```

replace with:
```html
<div class="field" onmousedown="doSomething()">
```

*Now when you click on the div, it will open a popup that says "Hello, World".*

# Using multiple events together.
For your HTML div add a little bit of code:

```html
<div id="field" class="field" onmouseover="doSomething()" onmouseout="doSomethingElse()">
	Some Text.
	<div class="face"></div>
</div>
```

In your javascript, add a new function so that it looks like this:

```js
// This is a function.
function doSomething() {
	document.getElementById("field").style = "background:#0000FF";
}

// This is a function.
function doSomethingElse() {
	document.getElementById("field").style = "background:#FF0000";
}
```

# Adding HTML to a div on mousedown.
For your HTML div add a few more options for `onmousedown` and `onmouseup`.

```html
<div id="field" class="field" onmouseover="doSomething()" onmouseout="doSomethingElse()" onmousedown="heading()" onmouseup="paragraph()">
	Some Text.
	<div class="face"></div>
</div>
```

Add a few more functions to your JavaScript file:

```js
function heading() {
	document.getElementById("field").innerHTML = "<div class=\"face\"></div><h1>THIS IS HEADING TEXT!</h1>";
}

function paragraph() {
	document.getElementById("field").innerHTML = "<div class=\"face\"></div><p>This is paragraph text!</p>";
}
```

# Text Input
## Variables
In javascript variables are created by writing `var`.

```
var a = 0;
```

## If statments
```
if (a == 0) {
	alert("a is 0");
} else {
	alert("a is not 0");
}
```

## Keyboard Input.
Add this to your javascript.

```js
function whenKey() {
	// Get the unicode value of key pressed.
	var x = event.which || event.charCode || event.keyCode;

	// Get the character that matches with that unicode value.
	var y = String.fromCharCode(x);

	if (x == 27) {
		alert("Escape Key");
	} else if (x == 37) {
		alert("Left Key");
	} else if (x == 38) {
		alert("Up Key");
	} else if (x == 39) {
		alert("Right Key");
	} else if (x == 40) {
		alert("Down Key");
	} else {
		alert (y);
	}
}
```

In your html body add:

```html
<input onkeydown="whenkey()" />
```
