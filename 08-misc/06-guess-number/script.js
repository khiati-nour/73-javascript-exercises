/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var Nmbr = Math.floor(Math.random() * (4 - 1) + 1)
    console.log(Nmbr)


    var y =0 ;
while (Nmbr != guess) {
    var guess = prompt("guess the secret number")
    if (Nmbr < guess) {
        alert("too higher")
        y++
    } else if (Nmbr == guess) {

        alert("that's it!" + "" + "you needed" +" "+ y + "guesses")
    } else if  (Nmbr > guess) {
        alert("too low")
        y++
    }
    console.log(y)
}

})();
