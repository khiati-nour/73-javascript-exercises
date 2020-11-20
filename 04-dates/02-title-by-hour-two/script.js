/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let timeNow = new Date();
    let time17h30 = new Date();
    time17h30.setHours(17,30,0);

    let after17h30 = false;

    if (timeNow.getTime() >= time17h30.getTime()){
       after17h30 = true;
    }
    if(after17h30){
        document.getElementById("target").innerHTML = "Good evening"
    }else{
        document.getElementById("target").innerHTML = "Hello"
    }



})();
