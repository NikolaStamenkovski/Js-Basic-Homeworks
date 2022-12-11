console.log(`----Dog&HumanCalculator----`);

function calculateDogAndHumanAge(years) {
    let dogAge = years * 7;
    let humanAge = dogAge / 7;
    console.log(`Your dog have human's years:`, dogAge);
    console.log(`You have dog's years:`, humanAge);
}
calculateDogAndHumanAge(3)
calculateDogAndHumanAge(5)

// Exercise 3 .

//  Function For ATM
console.log(`----Function for ATM----`);

function ATMFunction(sumOfMoney) {
    let availableSum = 90000 ;
    let withdrawalAmount= sumOfMoney;
    let newAvailablesum = availableSum - sumOfMoney; 
    if (availableSum > sumOfMoney) {
        console.log(`The transakcion is successful.
        On your account you have:` , newAvailablesum);
    }
    else if (availableSum < sumOfMoney) {
        console.log(`You don't have enough money`);
    }
   
}
ATMFunction(54000)
