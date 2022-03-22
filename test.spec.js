const { positiveSum } = require('./Sum of positive/script');

test('Positive numbers', () => {
expect(positiveSum([1, 2, -1, -6, 7])).toEqual(10);
expect(positiveSum([4, 2, 8, 1, -7])).toEqual(15);
expect(positiveSum([1, -2, -8, -1, -7])).toEqual(1);
});

const { opposite } = require('./Opposite number/script');

test('Opposite', () => {
expect(opposite(-1)).toBe(1);
expect(opposite(10)).toBe(-10);
expect(opposite(3.75)).toBe(-3.75);
});

const { removeChar } = require('./Remove First and Last Character/script');

test('Remove char ', () => {
expect(removeChar('Hallo')).toBe('all');
expect(removeChar('beautiful')).toBe('eautifu');
expect(removeChar('window')).toBe('indo');
});

const { repeatStr } = require('./String repeat/script');

test('repeat string', () => {
expect(repeatStr(5, 'Hi!')).toBe('Hi!Hi!Hi!Hi!Hi!');
expect(repeatStr(7, '!a!')).toBe('!a!!a!!a!!a!!a!!a!!a!');
expect(repeatStr(10, '$')).toBe('$$$$$$$$$$');
});
