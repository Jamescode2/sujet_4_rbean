function printValues(promise) {
    promise
        .then(array => {
            for (let i = 0; i < array.length; i++) {
                console.log(array[i]);
            }
        })
        .catch(() => {})  
}


module.exports = printValues;