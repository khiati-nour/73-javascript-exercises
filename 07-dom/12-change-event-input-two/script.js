/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#pass-one").setAttribute("minlength", "8");
    document.querySelector("#pass-one").addEventListener("keyup", type);


    function type() {

        const regex = /\d{2}/;
        let numberCheck = regex.test(document.querySelector("#pass-one").value);

        if (document.querySelector("#pass-one").value.length >= 8 && numberCheck == true) {
            document.querySelector("#validity").innerHTML = "ok";
        } else {
            document.querySelector("#validity").innerHTML = "Not ok";

        }
    };



})();
