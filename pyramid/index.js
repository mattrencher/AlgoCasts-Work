// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // n is total rows to print
    // iterate over the rows
    const cols = 2 * n - 1;
    const midpoint = Math.floor(cols / 2);
    for (let row = 0; row < n; row ++){
        // empty string for level
        let level = '';

        for (let col = 0; col < cols; col++){
            if(midpoint - row <= col && midpoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;
