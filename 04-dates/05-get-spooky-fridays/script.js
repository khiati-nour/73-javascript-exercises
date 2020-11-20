/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {
     /* var x;
      document.getElementById("year").value = x;
      console.log(x);*/
    function numberOfFridaythe13thsIn (year){
        var count = 0;
        for (var month=0; month<12; month++) {
            var d = new Date(year,month,13);
            if(d.getDay() == 5){

            }
        }
        return d.getMonth();
    }

    console.log(numberOfFridaythe13thsIn(document.getElementById("year").value));
})
})();
