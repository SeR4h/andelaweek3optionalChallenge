const findMissingNumbers = require('./missingNumbers');

test('returns array length too small', () => {
    expect(findMissingNumbers([1])).toEqual
        ('array length too small')
});

test('It does not accept strings as input', () => {
    expect(findMissingNumbers('string')).toEqual('Invalid Input');
});

test('It finds the missing numbers from an array', () => {
    expect(
        findMissingNumbers([4, 9, -5, 4, 1, -2, 1])
    ).toEqual(
        [-4, -3, -1, 0, 2, 3, 5, 6, 7, 8]
    );
});
