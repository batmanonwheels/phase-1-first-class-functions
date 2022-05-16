function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction(cb) {
    const named = function cb() { }
    return named
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Yet more razzling");
     }
}

console.log(returnsAnAnonymousFunction())