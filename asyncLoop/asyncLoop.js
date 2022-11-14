function asyncLoop(array, fonction, timeout) {
    let i = 0;
    clearInterval(id);
    var id = setInterval(() => {
        fonction(array[i]);
        i++;
        if (i == array.length) {
            clearInterval(id);
        }
    }, timeout);
}
module.exports = asyncLoop;