function Fretboard(canvas) {
	this.canvas = canvas;
	
	this.defaultOptions = {
		strings: {
			number:6,
			spacing: 40,
			width: 1,
			increasing_width: true
		},
		frets: {
			first: 0,
			last: 12,
			spacing: 50,
			width: 2
		},
		nut_width: 4
	};
	
	this.options = this.defaultOptions;
	
	this.draw = function(x, y) {
		var ctx = this.canvas.getContext('2d');
		
		// nut
		ctx.beginPath();
		ctx.lineWidth = this.options.nut_width;
		ctx.moveTo(x, y);
		ctx.lineTo(x+this.options.strings.spacing*(this.options.strings.number-1), y);
		ctx.stroke();
		
		// frets
		for(i=0;i<=this.options.frets.last-this.options.frets.first;i++) {
			ctx.beginPath();
			ctx.lineWidth = this.options.frets.width;
			ctx.moveTo(x, y+(i*this.options.frets.spacing));
			ctx.lineTo(x+this.options.strings.spacing*(this.options.strings.number-1), y+(i*this.options.frets.spacing));
			ctx.stroke();
		}
		
		// strings
		for(i=0;i<this.options.strings.number-1;i++) {
			ctx.beginPath();
			if(this.options.strings.increasing_width)
				ctx.lineWidth = this.options.strings.number * this.options.strings.width - i;
			else
				ctx.lineWidth(this.options.strings.width);
			ctx.moveTo(x+i*this.options.frets.spacing, y);
			ctx.lineTo(x+i*this.options.frets.spacing, y+(this.options.frets.last-this.options.frets.first)*this.options.frets.spacing);
			ctx.stroke();
		}
		
		
	}
}
