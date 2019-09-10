function Fretboard(canvas) {
	this.canvas = canvas;
	
	this.defaultOptions = {
		strings: {
			number:6,
			spacing: 20,
			decreasing_width: true
		},
		frets: {
			start: 0,
			end: 12,
			spacing: 25
		},
		nut_width: 10
	};
	
	this.options = this.defaultOptions;
	
	this.draw = function(x, y) {
		var ctx = this.canvas.getContext('2d');
		
		// nut
		ctx.beginPath();
		ctx.lineWidth = this.defaultOptions.nut_width;
		ctx.moveTo(x, y);
		ctx.lineTo(x+this.options.strings.spacing*(this.options.strings.number-1), y);
		ctx.stroke();
		
		
	}
}
