let playerScore = 0;
let computerScore = 0;
let result = "";
let playerSelection;
let compSelection = "";
const handSignal = ['rocket', 'paprika', 'scimitar']

function playerChoice(playerSelection){
    let playerSign = prompt("Please type: rocket, paprika, or scimitar");
    
            if (playerSign.toLowerCase() === 'rocket'){
         playerSelection = 'rocket';
         return playerSelection; 
    }    
    else if (playerSign.toLowerCase() === 'paprika'){
        return playerSelection = 'paprika'
    } 

    else if (playerSign.toLowerCase() === 'scimitar'){
        return playerSelection = 'scimitar'
    }
    else (console.log('fix ya typo, dungus'));
    }
 console.log(playerChoice())  ; 
console.log(playerSign)


function computerChoice(){
    compThrow = Math.floor(Math.random() * handSignal.length)
    return compSelection = handSignal[compThrow];
}

console.log(computerChoice());

function playRound(playerSelection, computerSelection) {
    

        if  ((playerSelection == 'rocket' && computerSelection == 'scimitar') ||
            (playerSelection == 'scimitar' && computerSelection == 'paprika') || 
            (playerSelection == 'paprika' && computerSelection == 'rocket')) {

            playerScore++
             console.log("You did it! " + playerSelection + " beats " + computerSelection + "You have " + playerScore + " points to the computer's " + computerScore + "points.");

            if (playerScore == 5) 
             console.log("You have won the whole dang thing!")

        }

       else if (playerSelection == computerSelection)
             console.log("You absolute fool. You have tied."); 
    
    
        else if ((playerSelection == 'rocket' && computerSelection == 'paprika' ) ||
                (playerSelection == 'scimitar' && computerSelection == 'rocket' ) || 
                (playerSelection == 'paprika' && computerSelection == 'scimitar')) {
             console.log("Gosh dang it, Human! " + computerSelection + " beats " + playerSelection + "You have " + playerScore + " points to the computer's " + computerScore + "points.");       
             computerScore++;
             

        if (computerScore == 5) 
             console.log("You have lost the whole dang thing! You coward!");
        
        }  
         
}


console.log(playRound(playerSelection, compSelection));
console.log('Your score is: ' + playerScore);
console.log("Your Opponent's score is: " + computerScore);  






