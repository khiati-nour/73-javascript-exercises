/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {


        let birthday = new Date(document.getElementById("dob-year").value,document.getElementById("dob-month").value-1, document.getElementById("dob-day").value );
        let today = new Date();
        var age =  today.getFullYear() - birthday.getFullYear();
       alert("Your BirthDay: " +""+ birthday+ "\n" +
             "Your Age : " + ""+ age)





    })
})();
