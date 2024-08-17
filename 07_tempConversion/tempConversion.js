const convertToCelsius = function (fahrenheit) {
	const celsius = (fahrenheit - 32) * (5 / 9);
	const roundedCelsius = Number(celsius.toFixed(1));

	return roundedCelsius;
};

const convertToFahrenheit = function (celsius) {
	const fahrenheit = celsius * (9 / 5) + 32;
	const roundedFahrenheit = Number(fahrenheit.toFixed(1));

	return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
