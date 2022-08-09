module.exports = function toReadable (number) {
    const digits = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];

    const numbers = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',

        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    let hundreds;
    let tens;
    let reminder;
    let result = '';

    if (number < 10) {
        return digits[number];
    }

    hundreds = Math.floor(number / 100);
    reminder = number % 100;

    if (hundreds) {
        result += digits[hundreds] + ' hundred ';
    }

    if (reminder === 0) {
        return result.trim();
    }

    if (Object.keys(numbers).includes(reminder.toString())) {
        result += numbers[reminder] + ' ';

        return result.trim();
    }

    tens = Math.floor(reminder / 10);
    reminder = number % 10;

    if (tens) {
        result += numbers[tens * 10] + ' ';
    }

    if (reminder === 0) {
        return result.trim();
    }

    return (result + digits[reminder]).trim();
}
