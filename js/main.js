requirejs.config({
	baseUrl: 'js/'
});

requirejs(['./Chessboard', './Renderer'], function(Chessboard, Renderer) {
	var chessboard = new Chessboard(8);
	var el = document.getElementById('chess');

	var renderer = new Renderer(el, chessboard);

	var firstListener = renderer.listen(function() {
		var started = false;
		var cases = document.querySelectorAll('[data-x]');
		for(var i = 0; i < cases.length; i++) {
			var el = cases[i];
			el.onclick = function() {
				var x = (this.getAttribute('data-x'))
				  , y = (this.getAttribute('data-y'))
				;

				if(!started) {
					chessboard.startPoint(x, y);
					started = true
				} else {
					chessboard.visitSquare(x, y);
				}
			};
		}
	});

	window.chessboard = chessboard;
	renderer.render();
});
