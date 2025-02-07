// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reduce((reversed, char) => {
//         return char + reversed;
//     }, '');
// }

function reverse(str) {
    let rev = '';
    rev = str.split('').reverse()
    return rev.join('')
}
module.exports = reverse;
