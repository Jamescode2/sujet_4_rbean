function printNTimes(str, T, N) {
    var id = setInterval(() => {
        console.log(str);
        N--;
        if (N == 0) {
            clearInterval(id);
        }
    }, T);
}

module.exports = printNTimes;