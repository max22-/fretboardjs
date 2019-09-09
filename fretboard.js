var defaultOptions = {
	strings = 6,
	frets = 12
};

function draw() {
	alert("Hello, world!");
	var canvas = document.getElementById('fretboard');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(75, 50);
		ctx.lineTo(100, 75);
		ctx.lineTo(100, 25);
		ctx.closePath();
		ctx.stroke();
	}
};
