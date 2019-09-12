const options = {
	wrapper: '.game__wrapper',
};

let ourGame;
class TicTac {
	gameOver = false;
	checkArray = [];
	ticArr = [];
	tacArr = [];
	winArrays = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7]
	];
	times = 0;
	isNull = false;
	constructor(options) {
		this.player1 = options.player1;
		this.player2 = options.player2;
		this.wrapper = document.querySelector(options.wrapper);
		this.items = Array.from(this.wrapper.children);
		this.init();
	};
	init() {
		this.wrapper.addEventListener('click', this.onWrapperClick.bind(this));
		first.style.backgroundColor = 'green';
	};


	onWrapperClick(e) {
		if (this.gameOver) return;
		if (e.target.className === 'game__item') {
			let index = e.target.dataset.num;
			if (this.checkArray.includes(index)) return;
			this.checkArray.push(index);
			if (this.isNull) {
				e.target.innerHTML = '&#9898;';
				this.isNull = !this.isNull;
				this.ticArr.push(index);
				this.times += 1;
				second.style.backgroundColor = '';
				first.style.backgroundColor = 'green';
				this.checkWhoWin();
			}
			else {
				e.target.innerHTML = '&#x2716;';
				this.isNull = !this.isNull;
				this.tacArr.push(index);
				this.times += 1;
				first.style.backgroundColor = '';
				second.style.backgroundColor = 'yellow';
				this.checkWhoWin();

			};

		};

	};

	checkWhoWin() {
		if (this.times >= 3) {
			this.winArrays.forEach((item) => {
				if (this.tacArr.sort().toString().includes(item.sort().toString())) {
					this.gameOver = !this.gameOver;
					this.setBackground(item, 'green');
					this.addWinnerBlock(this.player1);
					first.style.backgroundColor = 'green';
					second.style.backgroundColor = '';


				};
				if (this.ticArr.sort().toString().includes(item.sort().toString())) {
					this.gameOver = !this.gameOver;
					this.setBackground(item, 'yellow');
					this.addWinnerBlock(this.player2);
					second.style.backgroundColor = 'yellow';
					first.style.backgroundColor = '';
					


				};
			});
		};
	};

	setBackground(array, color) {
		array.forEach(item => {
			this.items[item - 1].classList.add(color);
		});
	};

	addWinnerBlock(player) {
		let winDiv = document.createElement('div');
		if(!player) {
			winDiv.innerHTML = 'Something';
		} else {
			winDiv.innerHTML = `${player} won`;
		};
		winDiv.classList.add('win_block');
		this.wrapper.append(winDiv);
	};

};
let playAgain = document.querySelector('.btn-dark');
let startGame = document.querySelector('.btn-primary');
startGame.addEventListener('click', onStartGame);
playAgain.addEventListener('click', onPlayAgain);
playerOne.addEventListener('input', deleteClass);
playerTwo.addEventListener('input', deleteClass);

function onStartGame() {
	let player1 = playerOne.value;
	let player2 = playerTwo.value;
	if(!player1 || !player2){
		if(!player1) {
			playerOne.classList.add('is-invalid');
		};
		if(!player2) {
			playerTwo.classList.add('is-invalid');
		};
		return;
	};
	options.player1 = player1;
	options.player2 = player2;
	ourGame = new TicTac(options);
	forma.classList.add('start');
	game.classList.add('game__appear');
	first.innerHTML = player1;
	second.innerHTML = player2;

};

function deleteClass() {
	this.classList.remove('is-invalid');
};

function onPlayAgain() {
	location.reload();
	// ourGame = undefined;
	// [...document.querySelector('.game__wrapper').children].forEach(item => {
	// 	item.innerHTML = '';
	// 	item.classList.remove('green', 'yellow');
	// });
	// let winBlock = document.querySelector('.win_block');
	// if(winBlock) winBlock.remove();
	// ourGame = new TicTac(options);
};