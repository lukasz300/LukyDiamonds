import { Diamond } from './Diamond.esm.js';
import { DIAMONDS_ARRAY_WIDTH } from './Game.esm.js';

export class GameState {
	constructor(level, leftMovement, pointsToWin, diamonds, diamondsSpriteImage) {
		let _leftMovement = leftMovement;
		let _playerScores = 0;
		let _gameBoard = diamonds.map(({x, y, row, column, kind}) => new Diamond(x, y, row, column, kind, diamondsSpriteImage));
		let _isSwaping = false;
		let _isMoving = false;
		this._pointsToWin = pointsToWin;
		this._level = level;

		this.getLeftMovement = () => _leftMovement;
		this.decreasePointsMovement = () => _leftMovement--;
		this.increasePointsMovement = () => _leftMovement++;
		this.getPlayerPoints = () => _playerScores;
		this.increasePlayerPoints = points => _playerScores += points;
		this.getIsSwaping = () => _isSwaping;
		this.setIsSwaping = value => _isSwaping = value;
		this.getIsMoving = () => _isMoving;
		this.setIsMoving = value => _isMoving = value;

		this.isPlayerWinner = () => _playerScores >= this._pointsToWin;
		this.getGameBoard = () => _gameBoard;

	}

	get level () {
		return this._level;
	}

	get pointsToWin() {
		return this._pointsToWin;
	}

	mixDiamonds() {
		const mixedDiamonds = _gameBoard.splice(0, DIAMONDS_ARRAY_WIDTH);
		let index = DIAMONDS_ARRAY_WIDTH;

		while(_gameBoard.length) {
			const randomNumber = Math.floor(Math.random() * _gameBoard.length);
			const nextElementToMix = _gameBoard.splice(randomNumber, 1)[0];
			const element = {
				...nextElementToMix,
				row: index % DIAMONDS_ARRAY_WIDTH,
				column: Math.floor(index / DIAMONDS_ARRAY_WIDTH),
			};

			index++;
			mixedDiamonds.push(element);
		}

		_gameBoard.push(...mixedDiamonds);
	}
}