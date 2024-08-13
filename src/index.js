module.exports = function reverse (n) {
    let reversedString = n.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}
