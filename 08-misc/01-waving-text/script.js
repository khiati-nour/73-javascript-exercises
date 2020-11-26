/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var txtId = document.getElementById('target')
var  txt =  txtId.innerText
var txtSplit = txt.split("")
 txtId.innerText = "";
    console.log(txtSplit)
    console.log(txt)

    for(var i = 0 ; i<txtSplit.length ; i++){
        var Value = i%8;
        var waveTxt = txtSplit[i].fontsize(Value)
      document.getElementById('target').innerHTML += waveTxt;
    }
})();
