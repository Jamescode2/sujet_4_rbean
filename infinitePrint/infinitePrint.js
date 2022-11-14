function infinitePrint(str,timeout) {
    setInterval(() => {
        console.log(str);
    }, timeout);
}

module.exports = infinitePrint;