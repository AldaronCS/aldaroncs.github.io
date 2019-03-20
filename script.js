// This is a function.
function doSomething() {
	document.getElementById("field").style = "background:#0000FF";
}

// This is a function.
function doSomethingElse() {
	document.getElementById("field").style = "background:#FF0000";
}

function heading() {
	document.getElementById("field").innerHTML = "<div class=\"face\"></div><h1>THIS IS HEADING TEXT!</h1>";
}

function paragraph() {
	document.getElementById("field").innerHTML = "<div class=\"face\"></div><p>This is paragraph text!</p>";
}

function whenKey() {
		alert("Escape Key");

	// Get the unicode value of key pressed.
	var x = event.charCode || event.keyCode;

	// Get the character that matches with that unicode value.
//	var y = String.fromCharCode(x);

	alert("Escape Key");

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
		alert (x);
	}
}
