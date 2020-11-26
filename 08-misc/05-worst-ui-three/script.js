/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let partOne = document.getElementById('part-one').value;
let partTwo = document.getElementById('part-two').value
var partThree = document.getElementById('part-three').value
 var partFour = document.getElementById('part-four').value






    document.getElementById("fix-part-one").addEventListener("click", function () {
        let ranOne = Math.floor(Math.random() * (499 - 460 + 1) + 460)
        document.getElementById('part-one').value = ranOne
        document.getElementById('target').innerHTML = "0" + document.getElementById('part-one').value +
            document.getElementById('part-two').value +
            document.getElementById('part-three').value +
            document.getElementById('part-four').value



    })
    document.getElementById("fix-part-two").addEventListener("click", function () {
        var ranTwo =Math.floor(Math.random() * (99  + 1))
        if (ranTwo<10){
            document.getElementById('part-two').value = "0"+ ranTwo
        } else if (ranTwo<99){
            document.getElementById('part-two').value = ranTwo
        }
        document.getElementById('target').innerHTML = "0" + document.getElementById('part-one').value +
            document.getElementById('part-two').value +
            document.getElementById('part-three').value +
            document.getElementById('part-four').value



    })
    document.getElementById("fix-part-three").addEventListener("click", function () {
        var ranThree =Math.floor(Math.random() * (99  + 1))

        if (ranThree<10){
            document.getElementById('part-three').value = "0"+ ranThree
        } else if (ranThree<99){
            document.getElementById('part-three').value = ranThree
        }
        document.getElementById('target').innerHTML = "0" + document.getElementById('part-one').value +
            document.getElementById('part-two').value +
            document.getElementById('part-three').value +
            document.getElementById('part-four').value



    })
    document.getElementById("fix-part-four").addEventListener("click", function () {

        var ranFour = Math.floor(Math.random() * (99 + 1))
        if (ranFour < 10) {
            document.getElementById('part-four').value = "0" + ranFour
        } else if (ranFour < 99) {
            document.getElementById('part-four').value = ranFour
        }
        document.getElementById('target').innerHTML = "0" + document.getElementById('part-one').value +
            document.getElementById('part-two').value +
            document.getElementById('part-three').value +
            document.getElementById('part-four').value


    })


})();
