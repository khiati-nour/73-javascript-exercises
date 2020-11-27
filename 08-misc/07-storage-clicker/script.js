/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var i=0 ;
    document.getElementById("increment").addEventListener("click", function () {
    i++
    document.getElementById('target').innerHTML = i;
    localStorage.setItem("counter", i);
    })


    if (location.reload) {
        if (localStorage.getItem("counter") != "undefined"){
            i = localStorage.getItem("counter");
            document.getElementById('target').innerHTML = i;
        }
    }

})();
