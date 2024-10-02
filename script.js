let roueletteTable = {
	account: 100,
	bet: new Set(),
	color:{red: 'КРАСНОЕ', black: 'ЧЕРНОЕ'},
	cells: [
		{ number: 0, color: null },
		{ number: 1, color: 'red' },
		{ number: 2, color: 'black' },
		{ number: 3, color: 'red' },
		{ number: 4, color: 'black' },
		{ number: 5, color: 'red' },
		{ number: 6, color: 'black' },
		{ number: 7, color: 'red' },
		{ number: 8, color: 'black' },
		{ number: 9, color: 'red' },
		{ number: 10, color: 'black' },
		{ number: 11, color: 'black' },
		{ number: 12, color: 'red' },
		{ number: 13, color: 'black' },
		{ number: 14, color: 'red' },
		{ number: 15, color: 'black' },
		{ number: 16, color: 'red' },
		{ number: 17, color: 'black' },
		{ number: 18, color: 'red' },
		{ number: 19, color: 'red' },
		{ number: 20, color: 'black' },
		{ number: 21, color: 'red' },
		{ number: 22, color: 'black' },
		{ number: 23, color: 'red' },
		{ number: 24, color: 'black' },
		{ number: 25, color: 'red' },
		{ number: 26, color: 'black' },
		{ number: 27, color: 'red' },
		{ number: 28, color: 'black' },
		{ number: 29, color: 'black' },
		{ number: 30, color: 'red' },
		{ number: 31, color: 'black' },
		{ number: 32, color: 'red' },
		{ number: 33, color: 'black' },
		{ number: 34, color: 'red' },
		{ number: 35, color: 'black' },
		{ number: 36, color: 'red' },
	],

	get: function () {
		return this.cells[Math.round(Math.random() * 36)];
	},

	makeBet: function (number) {
		if (number > 36 || number < 0) {
			console.warn('Нельзя сделать ставку на не существующее число!');
			return;
		}
		if (this.account === 0) {
			console.warn('Мне жаль но у вас закончились деньги на счету!');
			return;
		}
		if (!this.bet.has(number)) {
			this.account--;
			this.bet.add(number);
			console.info('СТАВКА НА'+' ' + number + '!');
		}
		else {
			console.info('СТАВКА НА'+' ' + number + 'УЖЕ БЫЛА СДЕЛАНА');
		}
		
	},

	spin: function () {
		if (this.bet.size === 0) {
			console.warn('СДЕЛАЙ СТАВКУ!');
			return;
		}

		let result = this.get();

		console.info('ВЫПАЛО' + ' ' + result.number + ' ' + this.color[result.color]);

		this._check(result);

		this.bet.clear();
	},
	_check: function (result) {
		let win = false;
		this.bet.forEach((v) => {
			if (result.number === v) {
				console.info('ВЫИГРЫШ !!!');
				this.account += 36;
				
			}
		});	
		if (!win) {
			console.info('ПРОИГРЫШ!');
			
		}
		this.showAccount();
	},
	showAccount: function () {
		console.info('На счету осталось' + this.account);
	},
}