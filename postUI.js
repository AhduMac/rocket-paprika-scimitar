userScore = 0;
compScore = 0;
badoinker = 1;




buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerChoice = button.id;
    if (playerChoice == "rock"){
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper"){
        playerChoiceInt = 1;
    }
    else if (playerChoice == "scissors")
    {
        playerChoiceInt = 2;
    }
 //   compChoiceInt = computerPlay(compChoice);
 //   playGame();
    })

})


/*
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


  for (let i = 0; i < 1000*badoinker; i++) {
        let userSign = 
        userThrow = userSign.toLowerCase();
        'You throw ' + userThrow;

        let compSign = Math.floor(Math.random()*3);
        let signal = ['rocket', 'paprika', 'scimitar'];
        let compThrow = signal[compSign];
        console.log('Computer throws ' + compThrow)

playRound(userThrow, compThrow)
  }
*/