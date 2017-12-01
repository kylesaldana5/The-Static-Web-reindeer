var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];




let blankArry = [ ]
let blank = " ";

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer 
// to the single HTML < div > element provided.
// The name of the reindeer should be prepended with the corresponding color from the other array.

function bothArrys(colors, reindeer) {
    
    for(i=0; i < colors.length; i++){
        if (reindeer < colors) {
            blankArry = reindeer;
        }
        else {
            blankArry = colors;
        }
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode(colors[i] + " " + reindeer[i]);
        newDiv.appendChild(newContent);
        let hohohoElement = document.getElementById("reindeer");
        document.body.insertBefore(newDiv, hohohoElement);
    }
    
}
    
    bothArrys(colors, reindeer);


