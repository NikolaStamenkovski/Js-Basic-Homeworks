let userInput = parseInt(prompt('Enter your birth year'));
// if ((userInput - 4)%12 === 0) {
//     console.log('Your Chinese Zodiac is Rat');
// }
// else if ((userInput - 4)%12 === 1) {
//     console.log('Your Chinese Zodiac is Ox');
// }
// else if ((userInput - 4)%12 === 2) {
//     console.log('Your Chinese Zodiac is Tiger');
// }
// else if ((userInput - 4)%12 === 3) {
//     console.log('Your Chinese Zodiac is Rabbit');
// }
// else if ((userInput - 4)%12 === 4) {
//     console.log('Your Chinese Zodiac is Dragon');
// }
// else if ((userInput - 4)%12 === 5) {
//     console.log('Your Chinese Zodiac is Snake');
// }
// else if ((userInput - 4)%12 === 6) {
//     console.log('Your Chinese Zodiac is Horse');
// }
// else if ((userInput - 4)%12 === 7) {
//     console.log('Your Chinese Zodiac is Goat');
// }
// else if ((userInput - 4)%12 === 8) {
//     console.log('Your Chinese Zodiac is Monkey');
// }
// else if ((userInput - 4)%12 === 9) {
//     console.log('Your Chinese Zodiac is Rooster');
// }
// else if ((userInput - 4)%12 === 10) {
//     console.log('Your Chinese Zodiac is Dog');
// }
// else if ((userInput - 4)%12 === 11) {
//     console.log('Your Chinese Zodiac is Pig');
// }
// else {
//     console.log('You make some mistake');
// }

switch ((userInput - 4)%12) {
    case 0: 
    console.log('Your Chinese Zodiac is Rat');
    break;
    case 1: 
    console.log('Your Chinese Zodiac is Ox');
    break;
    case 2: 
    console.log('Your Chinese Zodiac is Tiger');
    break;
    case 3: 
    console.log('Your Chinese Zodiac is Rabbit');
    break;
    case 4: 
    console.log('Your Chinese Zodiac is Dragon');
    break;
    case 5: 
    console.log('Your Chinese Zodiac is Snake');
    break;
    case 6: 
    console.log('Your Chinese Zodiac is Horse');
    break;
    case 7: 
    console.log('Your Chinese Zodiac is Goat');
    break;
    case 8: 
    console.log('Your Chinese Zodiac is Monkey');
    break;
    case 9: 
    console.log('Your Chinese Zodiac is Rooster');
    break;
    case 10: 
    console.log('Your Chinese Zodiac is Dog');
    break;
    case 11: 
    console.log('Your Chinese Zodiac is Pig');
    break;
    
    default:
    console.log('You make some mistake')
}