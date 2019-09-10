function Fretboard(canvas) {
	this.canvas = canvas;
	
	this.defaultOptions = {
		strings: 6,
		string_spacing: 20,
		fret_spacing: 25,
		starting_fret: 0,
		end_fret: 12,
		decreasing_string_width: true,
		nut_width: 10
	};
	
	this.options = this.defaultOptions;
	
	this.draw = function(x, y) {
		var ctx = this.canvas.getContext('2d');
		ctx.beginPath();
		ctx.lineWidth = this.defaultOptions.nut_width;
		ctx.moveTo(x, y);
		ctx.lineTo(x+this.options.string_spacing*(this.options.strings-1), y);
		ctx.stroke();
	}
}
