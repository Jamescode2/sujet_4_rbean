function filterLetter(character, callback, callback2) {
        if (character.match(/[a-z]/g) || character.match(/[A-Z]/g)) {
            callback(character);
        }
        else {
            callback2(character);
        }
}

module.exports = filterLetter;