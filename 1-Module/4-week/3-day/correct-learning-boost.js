let func = function(firstArg, secondArg) {
    console.log(firstArg(secondArg));
};

let triple = function(num) {
    return num * 3;
}

func(triple,9) //trippling 9 giving us 27