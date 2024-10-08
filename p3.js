let input = [5,10,15,20]

let output = input.reduce(fn);

function fn (acc,element) {
        return acc+element;
}

console.log(output)