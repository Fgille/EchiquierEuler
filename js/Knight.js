define([], function() {
	function Knight(chessboard) {
		this.x = 0;
		this.y = 0;
		this.chessboard = chessboard;
	}

	Knight.prototype = {
		getPosition: function() {
			return {x: this.x, y: this.y};
		},

		setPosition: function(obj) {
			this.move(obj.x, obj.y);
		},

		move: function(x, y) {
			if(!this.chessboard.coordinatesValid(x, y))
				throw new Error('Coordinates out of bounds');

			this.x = x;
			this.y = y;
		}
	};

	return Knight;
});
