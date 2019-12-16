function findMissingNumbers(inputArray) {

    var missingNumbers = [];
    if (typeof inputArray === 'string') {
        return 'invalid input'
    }
    if (inputArray.length <= 1) {
        return 'array length too small'
    }
    inputArray = inputArray.sort()
    var i = 1
    var missingValue = inputArray[0] + 1;
    const count = ((inputArray[inputArray.length - 1]) - missingValue) - (inputArray.length - 2);
    while (missingNumbers.length < count) {
        while (inputArray[i] !== missingValue) {
            missingNumbers.push(missingValue++)
        }
        i++;
        missingValue++;
    }
    return missingNumbers;
}
/*var ar = [ 4,9,1 ];
findMissingNumbers(ar)*/
module.exports = findMissingNumbers;
