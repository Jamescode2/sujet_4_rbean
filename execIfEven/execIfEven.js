function execIfEven(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            callback(array[i]);
        }
    }
}

module.exports = execIfEven;