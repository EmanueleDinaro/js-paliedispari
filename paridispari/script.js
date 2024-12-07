// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userEvenOrOdd = prompt('scgli tra pari e dispari')
const userNumber = parseFloat(prompt('scegli un numero tra 1 e 5'))

console.log(userEvenOrOdd,userNumber)

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
/**
 * This function returns a random int number betwenn a min & max value
 * @param {number} min 
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const cpuNumber = getRndInteger(1, 5)
console.log(`il numero della CPU è ${cpuNumber}`)

// Sommiamo i due numeri
const sum = cpuNumber + userNumber

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
/**
 * This function return a boolean value to demonstrate if the number in param is Even or Odd
 * @param {number} num 
 * @returns {boolean}
 */
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } 
    return false;
}

// Dichiariamo chi ha vinto.
if(isEven(sum) && userEvenOrOdd === 'pari' ||
    isEven(sum) && userEvenOrOdd === 'dispari') {
    console.log('Hai vinto!')
 } else {
    console.log('Hai perso!')
 }
