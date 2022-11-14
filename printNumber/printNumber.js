function printNumber(promise) {
    promise
        .finally(() => {
            console.log("-- All done --");
        })
        .then(result => {
            if (typeof result == 'number') {
                console.log("Number: " + result);
            }
            else {
                console.log("There was an error");
            }
        })
        .catch(() => {
            console.log("There was an error");
        })
}

module.exports = printNumber;