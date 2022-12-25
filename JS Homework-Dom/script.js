//Exercise 1

let headerText  = document.querySelectorAll('h1');

for(var i=0; i<headerText.length; ++i)
{
	headerText[i].innerText = 'Nikola Stamenkovski first DOM homework!';
}
console.log(headerText);

let pText  = document.querySelectorAll('p');

for(var i=0; i<pText.length; ++i)
{
	pText[i].innerText = 'I change this text from Js';
}
console.log(pText);


//Exercise 2
// HOMEWORK PART 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let numbers =[50, 5, 6, 8, 10, 3, 150];

let listForHtml = document.getElementById("arrayWithNumbers");

	for(let numeber of numbers) {
		listForHtml.innerHTML += `<li>${numeber}</li>`;
	};
let sum = 0;
	for(let i=0; i < numbers.length; i++) {	
		sum += numbers[i];
	} 
let sumOfArray = document.getElementById("sumOfNumbers");
sumOfArray.innerHTML = `The sum of numbers in array (${numbers.join('+')}) is = <strong>${sum}</strong>`;
sumOfArray.style.color = "green";