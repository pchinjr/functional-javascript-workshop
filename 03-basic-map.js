function doubleAll(numbers) {
  var result =[]
  numbers.map(number => 
    result.push( number*2 )  
  )
  return result
  
}

module.exports = doubleAll

var output = doubleAll([5,10,15]);
console.log(output);