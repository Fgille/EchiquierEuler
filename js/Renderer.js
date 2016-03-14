define(['./config'], function(config) {
	function Renderer(domElement, chessboard) {
		this.el = domElement;
		this.chessboard = chessboard;
		this.listeners = [];
		
		var knightObserverInstalled = false

		var trigger = (function() {
			if(this.chessboard.knight !== null && !knightObserverInstalled) {
				Object.observe(this.chessboard.knight, trigger);
				knightObserverInstalled = true;
			}

			this.render();
		}).bind(this);

		Object.observe(this.chessboard, trigger);
	}

	Renderer.prototype = {
		render: function() {
			this.el.innerHTML = '';
			this.renderChecker();
			if(this.chessboard.knight !== null)
				this.renderKnight();

			this.listeners.forEach(function(listener) {
				listener();
			});
		},

		renderChecker: function() {
			var el = this.el
			  , size = this.chessboard.getSize();
			;

			for(var i = 0; i < size; i++) {
				for(var j = 0; j < size; j++) {
					if(j === 0 && i !== 0) {
						el.appendChild(document.createElement('br'));
					}
					
					el.appendChild(createSquare(j, i));
				}
			}

			function createSquare(x, y) {
				var img = document.createElement('img');
				img.src = ((i+j)%2 === 0) ? config.image.light : config.image.dark;
				img.setAttribute('data-x', x);
				img.setAttribute('data-y', y);
				return img;
			}
		},

		renderKnight: function() {
			var el = this.el
			  , size = this.chessboard.getSize()
		      , position = this.chessboard.knight.getPosition()
		  ;

			var container = document.createElement('div');
			container.style.position = 'relative';
			container.style.width = container.style.height = '0px';

			var img = document.createElement('img');
			img.style.position = 'absolute';
			img.style.top = (position.y * 100) + 'px';
			img.style.left = (position.x * 100) + 'px';
			img.src = config.image.knight;
			container.appendChild(img);

			el.insertBefore(container, el.firstChild);
		},

		listen: function(listener) {
			this.listeners.push(listener);
			return listener;
		},

		unlisten: function(listener) {
			this.listener.splice(this.listener.indexOf(listener), 1);
		}
	};

	return Renderer;
});
