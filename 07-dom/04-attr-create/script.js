/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get the value of data-image
    var element = document.querySelector('#source');
    var dataAttribute = element.getAttribute('data-image');
// replace "data-name" with your data attribute name

    console.log(dataAttribute);
    // creat a new img element
    var img = document.createElement("img");

    img.src = dataAttribute;
    var src = document.getElementById("target");

    src.appendChild(img);
    //remove the original element
    var origin= document.getElementById("source");
    origin.remove();
    console.log(document.getElementById("source"));

})();
