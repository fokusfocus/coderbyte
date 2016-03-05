var test = "i ran there"

function LetterCapitalize(str) { 
	var myarr = [];
	myArr = str.split(" ");
	//console.log(myArr.length)					//[ 'hello', 'world' ], length = 2
	var tempStr = "";

	//console.log(myArr);
	//console.log(myArr[0].charAt(0).toUpperCase());

	for(i=0; i<myArr.length; i++) {
		for(j=0; j < myArr[i].length; j++) {

				//only change to uppercase for charAt(j) == 0
				if(j==0) {
					tempStr = tempStr + myArr[i].charAt(j).toUpperCase();
				}

				//else keep it lowercase
				else {
					tempStr = tempStr + myArr[i].charAt(j);
				}

		}

		myArr[i] = tempStr;
		tempStr = "";
	}

	str = myArr.join(" ");


  // code goes here  
  return str; 
         
}

console.log(LetterCapitalize(test));

//console.log(test.split(" "));