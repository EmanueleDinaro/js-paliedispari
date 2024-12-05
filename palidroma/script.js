// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
function reverseWord() {
    let reverseWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }
    return reverseWord;
}

const word = prompt('inserisci la parola');

const reversedWord = reverseWord();
if (reversedWord === word) {
    alert(`La parola ${word} è palindroma`);
} else {
    alert(`La parola ${word} non è palindroma`);
}