var a = 10,
	b = 13,
	value = (a * a) + (2 * a * b) - (b * b);

	console.log('Numbers never lies, result is ' + value);

	if (value < 0) {
		console.log('Value is positive');
	} else if (value > 0) {
		console.log('Value is negative');
	}

	if (value == 0) {
		console.log('Value is equal 0');
	} else if (value != 0) {
		console.log('Value is not equal 0');
	}

