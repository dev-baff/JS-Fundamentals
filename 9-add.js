let firstInt = parseInt(process.argv[2]);
let secondInt = parseInt(process.argv[3]);

function add(a, b) {
    return a + b;
}

console.log(add(firstInt, secondInt));