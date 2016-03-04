
var test = 12;

function SimpleAdding(num) {
var myArr =[]; 
  for (i = 1; i <= num; i++) {
  	myArr.push(i); 
  	//num = num + myArr[i-1];
  } 
  console.log(myArr);

  num = myArr.reduce(function(previousValue, currentValue){
  	return previousValue + currentValue;
  })

  return num;
}


console.log(SimpleAdding(test))



/*

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});

console.log(total)

*/