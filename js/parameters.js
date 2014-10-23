var canvas;
var context;
var offsetX = 73;
var offsetY = 38;
isDrawing = false;

var size = 1;
var opacity = 1;

window.onload = function() {
	canvas = document.getElementById('WorkSpace');
	context = canvas.getContext('2d');

	canvas.onmousedown = startDrawing;
	canvas.onmouseup = stopDrawing;
	canvas.onmouseout = stopDrawing;
	canvas.onmousemove = draw;
}

// functions for brush
function addSize() {
    size += 1;
    context.lineWidth = size;
}

function subSize() {
	if (size > 0)
        size -= 1;
    context.lineWidth = size;
}

function changeColor(color, imgElement) {
	context.strokeStyle = color;
}

function addOpacity() {
    if (opacity > 0)
	    opacity -= 0.1;
	context.globalAlpha = opacity;
}

function subOpacity() {
	opacity += 0.1;
	context.globalAlpha = opacity;
}

//functions for drawing
function startDrawing(e) {
	isDrawing = true;
	context.beginPath();
	context.moveTo(e.pageX - offsetX - canvas.offsetLeft, e.pageY - offsetY - canvas.offsetTop);
}

function draw(e) {
	if (isDrawing == true) {
		var x = e.pageX - offsetX - canvas.offsetLeft;
		var y = e.pageY - offsetY - canvas.offsetTop;

		context.lineTo(x, y);
		context.stroke();
	}
}

function stopDrawing() {
	isDrawing = false;
	step();
}

function fill() {
	context.fillRect(0, 0, context.width, context.height);
}

function copy() {

}

function paste() {

}

function undo() {

}

function redo() {

}

function step() {
	
}