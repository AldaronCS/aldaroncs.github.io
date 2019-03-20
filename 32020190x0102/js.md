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
```
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
```
<div class="field">
```

replace with:
```
<div class="field" onmousedown="doSomething()">
```
