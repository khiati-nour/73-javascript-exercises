/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



        // create elements <table> and a <tbody>

        var tbl = document.createElement("table");


        for (var i = 0 ; i<10 ; i++ ){
            var row = tbl.insertRow(i);
            var cell = row.insertCell(0);

            cell.innerHTML = "NEW CELL"+ ""+(i+1);

    }
    document.getElementById('target').appendChild(tbl);
console.log(tbl)


})();
