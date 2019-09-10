function draw() {
	var canvas = document.getElementById('fretboard');
	var my_fretboard = new Fretboard(canvas);
	my_fretboard.draw(50, 50);
}
