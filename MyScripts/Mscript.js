//JS that is used in the sum of all fears
function FindSumA(numbers, answer) {
    //loop through the array and add the adjacent number and check for the answer
    //let checkValue = 0;
    let found = false;

    for (let i = 0; i <= numbers.length - 2; i++) {
        //loop over the array in the after the current value
        for (let y = (i + 1); y <= numbers.length - 1; y++) {
            if (answer == numbers[i] + numbers[y]) {
                found = true;
                return found;
            }

        }
    }
    return found;
}

function DisplaySum() {
    let answer = document.getElementById("sumValue").value;
    let answer2 = document.getElementById("sumValue2").value;
    let answer3 = document.getElementById("sumValue3").value;
    let numArray = [15, 20, 6, 10];



    //show the array on the screen  and converts array to a string on screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumA(numArray, answer);
    let found2 = FindSumA(numArray, answer2);
    let found3 = FindSumA(numArray, answer3);
    document.getElementById("results").innerHTML = found.toString();
    document.getElementById("results2").innerHTML = found2.toString();
    document.getElementById("results3").innerHTML = found3.toString();
}









//these are the id that I gave my inputs and button - now I dont have to scroll as much
        //input1, input2, input3, input4, input5, kValue
        //soafBtn

        //document.getElementById("soafBtn").addEventListener("click", function () {
        //    //Step 1: Gather the user inputs and stash them in a variable
        //    let onClick1 = document.getElementById("input1").value;//this doesnt run until you click the button
        //    let onClick2 = document.getElementById("input2").value;
        //    let onClick3 = document.getElementById("input3").value;
        //    let onClick4 = document.getElementById("input4").value;
        //    let onClick5 = document.getElementById("input5").value;

        //    //let input1;
        //    //setting up an array
        //    let clickArray = [onClick1, onClick2, onClick3, onClick4, onClick5]


        //    //Step 2: add the gathered inputs to an array
        //    //I can put them , add them, or create them
        //    //[]initialized an array
        //    //new Array() also works;

        //    //drew likes for loop bcause its easy
        //    //I want to find two numbers in the array that added togther = kValue
        //    //Addition and subtraction are different side of the same coin
        //    //Multiple angles you can take
        //    //if something - do the thing - else do another thing
        //    //JavaScript Array Functin is a good google search for cool ways to do this
        //    //k = 10
        //    //[5, 1, 2, 4]
        //    let kValue;
        //    let current;
        //    let target;

        //    for (let loop = 0; loop < arrayLength; loop++) {

        //    }
        //});

        //function FindSumA(numbers, answer) {
        //    //loop through the array and add the adjacent number and check for the answer
        //    let checkValue = 0;
        //    let found = false;

        //    for (let i = 0; i <= numbers.length - 2; i++) {

        //    }
        //}

//Functions that could also be used in the futrue
//////better or more elegant way 
        ////function FindSumC(numbers, answer) {
        ////    let checkValue = 0;
        ////    let found = false;

        //    //created a loop that goes till the end
        //    for (let i = 0; i <= numbers.length - 1; i++) {
        //        //get the checkValue by substracting the current value of the array
        //        checkValue = answer - numbers[i];
        //        //start checking in the next postion in the array
        //        if (numbers.includes(checkValue, i + 1)) {
        //            found = true;
        //            break;
        //        }
        //    }
        //    return found;
        //}

        ////return all possible
        //function FindSumD(numbers, answer) {
        //    let checkValue = 0;
        //    let checkIndex = -1;
        //    let ansArray = [];

        //    for (let i = 0; i <= numbers.length - 1; i++) {
        //        checkValue = answer - numbers[i];
        //        checkIndex = numbers.indexOf(checkValue);

        //        if (checkIndex != -1 && checkIndex != i) {
        //            //add the 2 numbers to the array
        //            ansArray.push(numbers[i] + " + " + checkValue);
        //            //remove the 2nd number from array
        //            numbers.splice(checkIndex, 1);
        //        }
        //    }
        //    return ansArray;
        //}


        //function DisplaySum() {
        //    let answer = document.getElementById("sumValue").value;
        //    let numArray = [10, 15, 3, 7];

        //    //show the array on the screen
        //    document.getElementById("numList").innerHTML = numArray.toString();
        //    let found = FindSumC(number, answer);
        //    document.getElementById("results").innerHTML = found.toString();
        //}

        //function DisplayAllSums() {
        //    let answer = document.getElementById("sumValue").value;
        //    //let numArray = [10, 15, 3, 7, 2, 16];

        //    let numArray = GenerateNumbers(20);
        //    //show the array on the screen
        //    document.getElementById("numList").innerHTML = numArray.toString();
        //    let found = FindSumD(number, answer).join("<br>");
        //    document.getElementById("results").innerHTML = found.toString();
        //}

        ////generate some random numbers
        //function GenerateNumbers(max) {
        //    var arra = [];
        //    while (arra.length < max) {
        //        var r = Math.floor(Math.random() * 100) + 1;
        //        if (arra.indexOf(r) == -1) {
        //            arra.push(r);
        //        }
        //    }
        //    return arra;
        //}