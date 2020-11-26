/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



    var b1= parseInt(document.getElementById('part-one').textContent, 10);
    var b2= parseInt(document.getElementById('part-two').textContent, 10);
    var b3= parseInt(document.getElementById('part-three').textContent, 10);
    var b4= parseInt(document.getElementById('part-four').textContent, 10);
    var output = document.getElementById("target");
    var i = 0
    var j = 0
    var z = 0


    console.log(b1)
    console.log(b2)
    console.log(b3)
    console.log(b4)
    console.log(output)
    document.getElementById("part-one").addEventListener("click", function () {


        if(b1 < 499 && b1 >= 460 ){

             b1 = b1+1;
            document.getElementById('part-one').textContent = b1;
            output.innerHTML = "0" + b1 + b2 + b3 + b4

         }})
           document.getElementById("part-two").addEventListener("click", function () {
          if (i<10){
              b2 = "0"+ i;
              document.getElementById('part-one').textContent
              i++
          }else if (i<=99){
              b2 = i;
              i++

          }

               output.innerHTML = "0" + b1 + b2 + b3 + b4
               document.getElementById('part-two').textContent = b2;

           })
    document.getElementById("part-three").addEventListener("click", function () {
        if (j<10){
            b3 = "0"+j;
           j++
        }else if (j<=99){
            b3 = j;
            j++

        }

        output.innerHTML = "0" + b1 + b2 + b3 + b4
        document.getElementById('part-three').textContent = b3;

    })
    document.getElementById("part-four").addEventListener("click", function () {
        if (z<10){
            b4 = "0"+ z;
            z++
        }else if (z<=99){
            b4 = z;
            z++

        }

        output.innerHTML = "0" + b1 + b2 + b3 + b4
        document.getElementById('part-four').textContent = b4

    })








})();
