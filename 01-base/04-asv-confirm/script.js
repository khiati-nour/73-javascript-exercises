/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function person() {
    var getAge = prompt("What is your age? ");
    var getGender= prompt("What is your Gender? ");
    var getTown = prompt("where are you from? ");



    var r = confirm(+ getAge + " " + getGender + " " + getTown);
    if (r == false) {
        person();

    }



    // your code here

})();
