function findMissingNumbers(inputArray) {
    var missingNumbers = [];
    if (!Array.isArray(inputArray)) {
        throw new Error('Invalid Input');
    }
    if (inputArray.length <= 1) {
        throw new Error('array length too small');
    }
    inputArray.sort((a, b) => a - b)
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] - inputArray[i - 1] != 1) {
            var valDifference = inputArray[i] - inputArray[i - 1];
            for (j = 1; j < valDifference; j++) {
                missingNumbers.push(inputArray[i - 1] + j)
            }
        }
    }
    return missingNumbers;
}
module.exports = findMissingNumbers;
