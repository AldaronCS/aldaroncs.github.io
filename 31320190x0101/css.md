# CSS Styling
First, make file `style.css`.  Then modify your HTML from last week, by adding `<link rel="stylesheet" href="style.css">` to the head tag.

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>My Website</title>
	<meta charset="utf-8">
	<!-- !!!!!! Add this line !!!!!! -->
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<!-- Make sure you have this heading tag -->
	<h1>Heading</h1>
	<p>
	...
	</p>
</body>
</html>
```

## Change the size of the h1 tag in your body element.
Open your `style.css` and paste the following:

```css
h1 {
	font-size: 12pt;
}
```

Experiment with different font sizes.

Next, add a `p` class, and an `h2` and `h3` class (Add an `h2` and `h3` to your HTML if you haven't yet):

```css
h1 {
	font-size: 30pt;
}

h2 {
	font-size: 23pt;
}

h3 {
	font-size: 10pt;
}

p {
	font-size: 16pt;
}
```

## Define your own classes
Here's the CSS code to add to make your own class.

```css
.myclassname {
	font-size: 40pt;
}
```

Here's the HTML code to use the class:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
	<title>My Website</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<span class="myclassname">Giant Heading</span>
	<h1>Heading</h1>
	<p>
	Some paragraph.
	</p>
</body>
</html>
```

You can use these span elements inside of other tags too.

## Bold Text
You can also change which text is bold in your css:

```css
h1 {
	font-size: 30pt;
	font-weight: normal;
}

h2 {
	font-size: 23pt;
	font-weight: normal;
}

h3 {
	font-size: 10pt;
	font-weight: bold;
}

p {
	font-size: 16pt;
	font-weight: bold;
}
```

# Next
[Add colors!](colors)
