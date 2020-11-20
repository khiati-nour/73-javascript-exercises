/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "seagull", num: 1},
        {name: "raven", num: 3},
        {name: "chickadee", num: 2},
        {name: "owl", num: 4},
        {name: "buzzard", num: 8},
        {name: "pigeon", num: 1},
        {name: "magpie", num: 3},
        {name: "vulture", num: 2},
        {name: "falcon", num: 1},
        {name: "robin", num: 2},
        {name: "dove", num: 1},
        {name: "crow", num: 5},
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);
    document.getElementById("run").addEventListener("click", function () {
        for (var i=0; i<birds.length; i++) {
            if (birds[i].num ===1) {
                birds[i].name = "A" + " " + birds[i].name

            } else if (birds[i].num > 1) {
                birds[i].name = "A few"  + " " + birds[i].name


            }

            console.log(birds)}

         function getRandomInt(min, max){
          return Math.floor(Math.random() * (max - min)) + min;}

         let adjective =[...adjectives][getRandomInt(0, adjectives.size)];
          let bird = (birds[Math.floor(Math.random() * birds.length)].name);





        document.getElementById("target").innerHTML= bird + " " + adjective;


    })
})();
