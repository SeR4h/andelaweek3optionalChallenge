const findMissingNumbers = require('./missingNumbers');

test('returns array length too small', () => {
    expect(findMissingNumbers([1])).toEqual
        ('array length too small')
});

test('It does not accept strings as input', () => {
    expect(findMissingNumbers('string')).toEqual('invalid input');
});

test('It finds the missing numbers from an array', () => {
    expect(
        findMissingNumbers([1, 2, 3, 5, 6, 7, 9])
    ).toEqual(
        [4, 8]
    );
});
