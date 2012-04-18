define([ 'use!underscore' ], function(_) { 
	describe('Game of Life', function () {
		// to discuss: should Game of Life be implemented as a prototype?
		// ok, I think it's going to be more like TDD
		// that's just one of possible implementations! there are many others
		// after each passed test commit your code
		// you are only allowed to pass ONE more test per each commit
		
		/* Editable area starts here */
		// You can only define constructor and prototype fields
		// You can also define other constructors and their prototypes' fields

		// 
		// 
		// This sample implementation will be removed before merging
		// 
		// 
		var Game = function () {
			// throw new Error('Not implemented exception');
			 
			this.board = [];
		};

		Game.prototype.addPoint = function(x, y) {
			if (x != parseInt(x, 10) || y != parseInt(y, 10)) throw new Error();

			this.board.push([x, y]);
		};

		Game.prototype.getBoard = function() {
			return this.board;
		};

		Game.neighbours = [ [1, -1], [1, 0], [1, 1], [0, -1], [0, 1], [-1, -1], [-1, 0], [-1, 1] ]; 
		Game.prototype.getNeighbours = function(x, y) {
			var result = [];
			for (var i = Game.neighbours.length - 1; i >= 0; i--) {
				result.push([ x + Game.neighbours[i][0], y + Game.neighbours[i][1] ]);
			};
			return result;
		};

		Game.prototype.tick = function() {
			var self = this;
			var points = this.board.map(function (point) { return point.join(','); });

			var isAlive = function (point) {
				point = point.join(',');
				return points.some(function (_point) { return _point == point; });
			};
			var countNeighbours = function (point) {
				var neighbours = self.getNeighbours(point[0], point[1]).map(function (point) { return point.join(','); });
				return _.intersection(neighbours, points).length;
			};

			this.board = this.board
				.reduce(function (result, current) {
					result.push(current);
					result = result.concat(self.getNeighbours(current[0], current[1]));
					return result;
				}, [])
				.map(function(point) { return point.join(','); })
				.reduce(function (result, current) {
					result.every(function (point) { return point != current; }) && result.push(current);
					return result;
				}, [])
				.map(function(point) { return point.split(',').map(parseFloat); })
				.filter(function (point) {
					var neighbours = countNeighbours(point);

					if (neighbours > 3) return false;

					if (neighbours > 1 && isAlive(point)) return true;
					if (neighbours == 3) return true;
					return false;
				});
		};

		/* Editable area ends here */

		var gol, generateNumber, generateTestData, data2x2, data3x3;
		beforeEach(function () {
			gol = new Game();
			generateNumber = function (min, max) {
				min = (typeof min != 'undefined') ? min : -100;
				max = (typeof max != 'undefined') ? max : 100;
				if (max == min) return max;
				return parseInt( (max - Math.random() * Math.abs(max - min) ).toFixed(0) );
			};
			data2x2 = [
				[0, 0],
				[0, 1],
				[1, 0],
				[1, 1]
			];
			data3x3 = [
				[0, 0],
				[0, 1],
				[0, 2],
				[1, 0],
				[1, 1],
				[1, 2],
				[2, 0],
				[2, 1],
				[2, 2],
			];
		});

		it('can be constructed', function () {
			expect(gol).to.be.ok();
		});

		it('can return default initiated board', function () {
			var result = gol.getBoard();
			expect(result instanceof Array).to.be.ok();
			expect(result).to.have.length(0);
		});

		it('can add new points', function () {
			var data = [ 
				[ generateNumber(), generateNumber() ],
				[ generateNumber(), generateNumber() ],
				[ generateNumber(), generateNumber() ]
			];

			data.forEach(function (point) {
				gol.addPoint(point[0], point[1]);
			});

			var board = gol.getBoard();
			expect(board instanceof Array).to.be.ok();
			expect(board).to.have.length(3);

			data.forEach(function (point) {
				var result = board.filter(function (_point) { return point[0] == _point[0] && point[1] == _point[1] });
				expect(result).to.have.length(1);				
			});
		});

		it('only accepts discrete coords', function () {
			// to be sure
			var data = [ 
				[ Math.random(), Math.random() ], 
				[ Math.random(), Math.random() ], 
				[ Math.random(), Math.random() ]
			];

			data.forEach(function (point) {
				expect(function () { gol.addPoint(point[0], point[1]); }).to.throwError();
			});
		});

		it('can list neighbours', function () {
			var data = [
				[ generateNumber(), generateNumber() ],
				[ generateNumber(), generateNumber() ],
				[ generateNumber(), generateNumber() ]
			];

			data.forEach(function (point) {
				var neighbours = gol.getNeighbours(point[0], point[1]);

				expect(neighbours instanceof Array).to.be.ok();
				expect(neighbours).to.have.length(8);

				//this is ugly!! but I didn't want to suggest any solutions
				var i = 0;
				neighbours.some(function (_point) { return _point[0] == point[0] + 1 && _point[1] == point[1] + 1; }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] + 1 && _point[1] == point[1]; 		 }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] + 1 && _point[1] == point[1] - 1; }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] 		 && _point[1] == point[1] + 1; }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] 		 && _point[1] == point[1] - 1; }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] - 1 && _point[1] == point[1] + 1; }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] - 1 && _point[1] == point[1]; 		 }) && i++;
				neighbours.some(function (_point) { return _point[0] == point[0] - 1 && _point[1] == point[1] - 1; }) && i++;
				expect(i).to.be(8);
			});
		});

		it('can run one turn', function () {
			expect(function () { gol.tick(); }).not.to.throwError();
		});

		describe('Game of Life rules', function () {
			it('cell with no neighbours dies', function () {
				var data = [
					[ generateNumber(), generateNumber() ]
				];

				data.forEach(function (point) {
					gol.addPoint(point[0], point[1]);
				});

				gol.tick();

				var board = gol.getBoard();
				expect(board instanceof Array).to.be.ok();
				expect(board).to.have.length(0);
			});

			it('cell with one neighbour die', function () {
				var data = [
					data2x2.splice(generateNumber(0, 3), 1)[0],
					data2x2.splice(generateNumber(0, 2), 1)[0],
				];

				data.forEach(function (point) {
					gol.addPoint(point[0], point[1]);
				});

				gol.tick();

				var board = gol.getBoard();
				expect(board instanceof Array).to.be.ok();
				expect(board).to.have.length(0);
			});

			it('cell with two or three neighbours lives', function () {
				var data = [], max = generateNumber(3, 4);
				for (var i = 0; i < max; i++) {
					data.push(data2x2.splice(generateNumber(0, 3 - i), 1)[0]);
				};

				data.forEach(function (point) {
					gol.addPoint(point[0], point[1]);
				});

				gol.tick();

				var board = gol.getBoard();
				expect(board instanceof Array).to.be.ok();
				expect(board.length).to.be.above(max - 1);

				var matchedCells = 0;
				data.forEach(function (point) {
					board.some(function (_point) { return point[0] == _point[0] && point[1] == _point[1]; }) && matchedCells++;
				});
				expect(matchedCells).to.equal(max);
			});

			it('cell with three neighbours becomes alive', function () {
				var data = [], max = 3;
				for (var i = 0; i < max; i++) {
					data.push(data2x2.splice(generateNumber(0, 3 - i), 1)[0]);
				};

				data.forEach(function (point) {
					gol.addPoint(point[0], point[1]);
				});

				gol.tick();

				var board = gol.getBoard();
				expect(board instanceof Array).to.be.ok();
				expect(board.length >= max).to.be.ok();

				var matchedCells = 0;
				data.forEach(function (point) {
					board.some(function (_point) { return point[0] == _point[0] && point[1] == _point[1]; }) && matchedCells++;
				});

				var newborn = data2x2.pop();
				board.some(function (point) { return point[0] == newborn[0] && point[1] == newborn[1]; }) && matchedCells++;

				expect(matchedCells).to.equal(4);
			});

			it('cell with four or more neighbours dies', function () {
				var data = [];
				var addX = generateNumber(), addY = generateNumber();
				data = data.concat(data3x3).map(function (point) { 
					return [point[0] + addX, point[1] + addY];
				});

				data.forEach(function (point) {
					gol.addPoint(point[0], point[1]);
				});

				gol.tick();

				var board = gol.getBoard();
				expect(board instanceof Array).to.be.ok();

				var expected = [
					[addX, addY],
					[addX,  2 + addY],
					[2 + addX, addY],
					[2 + addX, 2 + addY]
				].map(function (point) { return point.join(','); });

				var shouldDie = [
					[addX + 0, addY + 1],
					[addX + 1, addY + 0],
					[addX + 1, addY + 1],
					[addX + 1, addY + 2],
					[addX + 2, addY + 1],
				].map(function (point) { return point.join(','); });

				board = board.map(function (point) { return point.join(','); });
				expect(_.intersection(expected, board).length).to.equal(4);
				expect(_.intersection(shouldDie, board).length).to.equal(0);
			});
		});
	});
});