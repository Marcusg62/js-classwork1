function factorize(n) {
    let factors = [];
    for (var i = 0; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i)
        }
    }
    return factors;
}

function findUnique(str) {
    var uniqueChars = {};
    for (let i = 0; i < str.length; i++) {
        uniqueChars[str[i]] = 1
    }
    return Object.keys(uniqueChars)


}

function doOperations(x, y, operator) {

    return operator(x, y)

}

function multiply(x, y) {
    return x * y
}
function power(x, y) {
    return Math.pow(x, y)
}