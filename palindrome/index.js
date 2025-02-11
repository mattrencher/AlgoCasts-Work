// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     // if str is palindrome return true
//     // if str is not palindrome return false
//     let pali = str.split('').reverse().join('');
//     if (str === pali){
//         return true;
//     } else {
//         return false;
//     }
// }

// function palindrome(str) {
//     str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     })
// }

function palindrome(str) {
    const rev = str.split('').reverse().join('');
    return str === rev;
}

module.exports = palindrome;

