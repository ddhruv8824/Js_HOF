let input = [1,2,3,4,5,6]

let output = input.filter(fn);

function fn (element) {
      return (element % 2 ==0) ? element:undefined;
}

console.log(output)