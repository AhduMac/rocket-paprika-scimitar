userScore = 0;
compScore = 0;
badoinker = 1

function playRound(userThrow, compThrow) {
    
        if  ((userThrow == 'rocket' && compThrow == 'scimitar') ||
            (userThrow == 'scimitar' && compThrow == 'paprika') || 
            (userThrow == 'paprika' && compThrow == 'rocket')) {
            userScore++
            console.log("You did it! " + userThrow + " beats " + compThrow + " You have " + userScore + " points to the computer's " + compScore + " points.");

            if (userScore == 5){ 
                console.log("You have won the whole dang thing!");
                return (badoinker = 0);
                }
        }

        else if (userThrow == compThrow)
            console.log("You absolute fool. You have tied. You have " + userScore + " points to the computer's " + compScore + " points."); 

        else if ((userThrow == 'rocket' && compThrow == 'paprika' ) ||
                 (userThrow == 'scimitar' && compThrow == 'rocket' ) || 
                 (userThrow == 'paprika' && compThrow == 'scimitar')) {
                 compScore++;
                console.log("Gosh dang it, Human! " + compThrow + " beats " + userThrow + " You have " + userScore + " points to the computer's " + compScore + " points.");       
            if (compScore == 5){ 
                console.log("You have lost the whole dang thing! You coward!");
                return (badoinker = 0);
               }
    }     
}

function game(){
    for (let i = 0; i < 1000*badoinker; i++) {
        let userSign = prompt("Please type: rocket, paprika, or scimitar");
        userThrow = userSign.toLowerCase();
        console.log('You throw ' + userThrow);

        let compSign = Math.floor(Math.random()*3);
        let signal = ['rocket', 'paprika', 'scimitar'];
        let compThrow = signal[compSign];
        console.log('Computer throws ' + compThrow)

playRound(userThrow, compThrow);
    }
}

game();

