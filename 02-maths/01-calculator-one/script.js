/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        num1 = parseInt(document.getElementById("op-one").value);
        num2 = parseInt(document.getElementById("op-two").value);
       z = num1 + num2;
       alert(z)


    });

    document.getElementById("substraction").addEventListener("click", function() {
        alert(document.getElementById ("op-one").value - document.getElementById ("op-two").value );
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        alert(document.getElementById ("op-one").value * document.getElementById ("op-two").value );
    });

    document.getElementById("division").addEventListener("click", function() {
        alert(document.getElementById ("op-one").value / document.getElementById ("op-two").value );
    });
})();
