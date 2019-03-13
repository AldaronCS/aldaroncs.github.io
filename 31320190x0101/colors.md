# CSS Colors
Set the background to a color.  Colors are done in the RGB colorspace or RGBA format.

```css
body {
    background: #FF0000;
}
```

You can also set the text color.

```
p {
    color: #0000FF;
}
```

## Images
You can also set the background to an image:

```css
body {
    background: url("https://aldaroncs.github.io/light_background.png");
}
```

By default the image tiles and repeats.  But you can also make it be centered:

```css
body {
	background: url("https://aldaroncs.github.io/light_background.png");
	background-size: cover;
	background-position: center;
}
```

## Pseudo-Classes
Set the three kinds of link colors / font-weight for your site:

```
a:link {
    color: #0000FF;
}

a:visited {
    color: #000080
}

a:hover {
    color: #8080F0;
    font-weight: bold;
}
```

## Next

And that's the simplest parts of CSS.  On the reference sheet there is all the descriptions of
changing margins and padding of different parts of your page.  Change the colors/images on your page
and margins until it's what you want.  Ask me if you have any questions on how to do what you want.
