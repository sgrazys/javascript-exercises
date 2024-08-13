const sumAll = function (start, end) {
	const listOfNums = [];

	if (start > end) {
		for (let i = end; i <= start; i++) {
			listOfNums.push(i);
		}
	}

	// prettier-ignore
	if (start <= 0 || 
    end <= 0 || 
    start % 1 !== 0 || 
    end % 1 !== 0 ||
    typeof(start) !== 'number' ||
    typeof(end) !== 'number') {

		return 'ERROR';
	}

	for (let i = start; i <= end; i++) {
		listOfNums.push(i);
	}

	return listOfNums.reduce((t, curr) => t + curr, 0);
};

// Do not edit below this line
module.exports = sumAll;
