define(['./Knight'], function(Knight) {
	function Chessboard(size) {
		this.visited = [];
		for(var i = 0; i < size * size; i++) {
			this.visited.push(0);
		}

		this.path = [];
		this.knight = null;
	}

	Chessboard.prototype = {
		/**
		 * @return number The dimension of the chesboard
		 */
		getSize: function() {
			return Math.sqrt(this.visited.length);
		},

		/**
		 * @param x number The x coordinate
		 * @param y number The y coordinate
		 * @return boolean Are the given coordinates in the grid ?
		 */
		coordinatesValid: function(x, y) {
			var size = this.getSize();
			return x >= 0 && x < size && y >= 0 && y < size;
		},

		/**
		 * @param x number the x coordinate of the given square
		 * @param y number the y coordinate of the given square
		 * @return number the number of times the given square has been visited
		 */
		getSquare: function(x, y) {
			if(!this.coordinatesValid(x, y))
				throw new Error('Coordinates out of bounds');

			return this.visited[x + y * this.getSize()];
		},

		/**
		 * @param x number the x coordinate of the given square
		 * @param y number the y coordinate of the given square
		 * @return number the number of times the given square has been visited
		 */
		visitSquare: function(x, y) {
			if(!this.coordinatesValid(x, y))
				throw new Error('Coordinates out of bounds');

			this.knight.move(x, y);
			this.path.push(this.knight.getPosition());
			return ++this.visited[x + y * this.getSize()];
		},

		rollback: function() {
			if(this.isPathEmpty())
				throw new Error('Nothing to rollback');
			
			var pos = this.path.pop();
			this.knight.setPosition(knight);
			return pos;
		},

		/**
		 * @return boolean Is the path empty ?
		 */
		isPathEmpty: function() {
			return this.path.length == 0;
		},

		/**
		 * @return Array The path of all visited squares
		 */
		getPath: function() {
			return this.path;
		},

		startPoint: function(x, y) {
			if(!this.coordinatesValid(x, y))
				throw new Error('Coordinates out of bounds');

			this.knight = new Knight(this);
			this.knight.setPosition({x: x, y: y});
			this.path = [this.knight.getPosition()];
		}
	};

	return Chessboard;
});
