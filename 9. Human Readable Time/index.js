/* 

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

*/

const humanReadable = (seconds) => {
	if (seconds < 0 || seconds > 359999) {
		return null;
	}
	if (seconds === 0) {
		return "00:00:00";
	}
	// Do the math for the hours
	let hours = Math.floor(seconds / 3600); // 3600 seconds in an hour
	seconds = seconds - hours * 3600;
	if (hours < 10) {
		hours = "0" + hours;
	}
	// Do the math for the minutes
	let minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
	seconds = seconds - minutes * 60;
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	// Check if there are fewer than 10 seconds remaining to account for leading zero
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return `${hours}:${minutes}:${seconds}`;
};
