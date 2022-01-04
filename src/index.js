module.exports = function reverse(n) {
    //   let newNum = Math.abs(n);
    let numCheck = Math.abs(n);
    let str = numCheck.toString();
    let newNum;

    if (str.endsWith('000')) {
        newNum = str.slice(0, -3).split('').reverse().join('');
    } else if (str.endsWith('00')) {
        newNum = str.slice(0, -2).split('').reverse().join('');
    } else if (str.endsWith('0')) {
        newNum = str.slice(0, -1).split('').reverse().join('');
    } else {
        newNum = str.split('').reverse().join('');
    }

    return newNum;
}

