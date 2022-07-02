module.exports = function reverse (n) {
    const str = n.toString();
    return parseInt([...str].reverse().join(""));
}