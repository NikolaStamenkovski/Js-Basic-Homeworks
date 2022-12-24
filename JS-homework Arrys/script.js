console.log('Exrecise 1');
//exercise 1
let infoArray = ['Nikola','excited','interview',]
function tellStory (name , mood , activity) {
    
    console.log(`This is ${infoArray[0]}. Today he is so ${infoArray[1]} , because he has an ${infoArray[2]} for new Job.`);
}
tellStory(infoArray);

//exercise 2
console.log('----Exrecise 2-----');
let numberArray = [5,6,7,8,9];

function sumOfNumbers(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
    sum += array[i];

    }
    console.log('The result is: ', sum);
}
sumOfNumbers(numberArray);


 // Exercise 2 Bonus
function validateNumber(array) {
    
    for(let i = 0; i < array.length; i++) {
        let result = typeof array[i];
        if(result === 'number' ) {
            console.log(`${array[i]} is a valid number`);
        }
        else{
            console.log(`Error, ${array[i]} is not a valid number, it's a ${result}`);
        }
    }
}
let secondArray = [1, '2', 5 , 6, 10];
validateNumber(secondArray);
validateNumber(numberArray);

// Exercise 3 
console.log('----Exrecise 3-----');

let arrayString = [ 'Hello', 'I', 'am', 'trying','to','understand', 'what' , 'I' ,'am', 'doing', 'now', '!' ];
function bigString(array) {
    let result = '';
    for(let i = 0 ; i < array.length ; i++) {
        result += array[i] + " ";
    }
    console.log(result);
}
bigString(arrayString);

// Exercise 4
console.log('----Exrecise 4-----');
for(let i = 1; i <= 20 ; i++) {
    if(i % 2 == 0) {
        console.log(`${i} is an even number \n `);
    }
    else if( i % 2 !== 0) {
        console.log(`${i} is an odd number  `);
    }
}
//Exercise 5
console.log('----Exrecise 5-----');

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
 
let min = Math.min(...arrayOfNumbers);
let max = Math.max(...arrayOfNumbers);

console.log(min);
console.log(max);

function findMinAndMax(numMin, numMax) {
    let result = numMin + numMax;
    return `Min number is: ${numMin}, Max number is: ${numMax}, Sum is: ${result}`
}
console.log(findMinAndMax(min, max));

//Exercise 6
console.log('----Exrecise 6-----');

function infoStudents(firstNames, lastNames) {
    let fullName =[];
    for (let i = 0; i < firstNames.length; i++) {
        fullName.push((i+1) + "." + " " + firstNames[i]  + " " + lastNames[i]);
    }
    return fullName;
}
let studentsFirstNames = ['Nikola', 'David ', 'Frosina', 'Filip', 'Radica'];
let studentsLastNames = ['Stamenkovski','Shtergiski','Stamenkovska', 'Trajanovski', 'Nikolovska'];
console.log(infoStudents(studentsFirstNames, studentsLastNames));