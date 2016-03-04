var test = "hello*3";


function LetterChanges(str) {
    //var testArr = str.split("");
    var tempArr = [];

    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {

            tempArr.push(str.charCodeAt(i));
            tempArr[i] = tempArr[i] + 1;
            tempArr[i] = String.fromCharCode(tempArr[i]);	

            if(tempArr[i] == "p" || tempArr[i] == "i") {
            	tempArr[i] = tempArr[i].toUpperCase();
            	console.log(tempArr[i]);	//this will display "i" and "p".. why?
            }

        } else {
            tempArr[i] = str[i];
        }


    }
    console.log(tempArr);	//this display [ 'i', 'f', 'm', 'm', 'p', '*', '3' ]

    str = tempArr.join("");
    return str;

}

console.log(LetterChanges(test));

//var test2 = ["a", "i", "u"]
//console.log(test2[0].toUpperCase());