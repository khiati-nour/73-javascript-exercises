/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var array = [];
    var i;
    for (i = 0; i < 10; i++) {
        array[i]= Math.floor(Math.random() * 100);
    }
    document.getElementById("n-1").innerHTML = array[0];
    document.getElementById("n-2").innerHTML = array[1];
    document.getElementById("n-3").innerHTML = array[2];
    document.getElementById("n-4").innerHTML = array[3];
    document.getElementById("n-5").innerHTML = array[4];
    document.getElementById("n-6").innerHTML = array[5];
    document.getElementById("n-7").innerHTML = array[6];
    document.getElementById("n-8").innerHTML = array[7];
    document.getElementById("n-9").innerHTML = array[8];
    document.getElementById("n-10").innerHTML = array[9];
    document.getElementById("max").innerHTML = Math.max(...array);
    document.getElementById("min").innerHTML = (Math.min(...array));
 var x= array.reduce((a, b) => a + b)
    document.getElementById("sum").innerHTML = x;
    document.getElementById("average").innerHTML = x/(array.length);


})();