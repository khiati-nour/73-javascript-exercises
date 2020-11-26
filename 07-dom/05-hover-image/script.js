/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var element = document.querySelector('img');
    var dataAttribute = element.getAttributeNode("data-hover").value /*element.getAttribute('data-hover')*/;

    document.querySelector('img').addEventListener("mouseover", function() {

        console.log(dataAttribute );

        document.querySelector('img').src = dataAttribute;
    })
})();
