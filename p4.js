let input = [1,2,3,4,5]

let output = input.filter(fn).map(fun).reduce(func)

function fn (element) {
    return (element % 2 == 0) ? element:undefined;
}

function fun(element){
    return element*element
}
function func(acc , element){
    return acc + element
}
console.log(output)