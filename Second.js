const runGame = function() {
    // Your code additions go here
    
    let team1 = prompt("Enter name of first team:");
    let score1 = parseInt(prompt("Enter first team score:"));

    let team2 = prompt("Enter name of second team:");
    let score2 = parseInt(prompt("Enter second team score:"));

    let result;   // results tab

    if (score1 > score2) {
        result = team1 + " won " + score1 + " to " + score2;
    }
    else if (score2 > score1) {
        result = team2 + " won " + score2 + " to " + score1;
    }
    else {
        result = "The game is a TIE" + score1 + " to " + score2;
    }

    // Code that adds a new paragraph with a string to the "div" in the HTML file 
    const divId = document.getElementById("results");
    const newPara = document.createElement("p");
    newPara.textContent = result;
    divId.appendChild(newPara);
}
