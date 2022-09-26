let playerScore = 0
let computerScore = 0

const handSignal = ['rocket', 'paprika', 'scimitar']


function computerChoice(){
    compThrow = Math.floor(Math.random() * handSignal.length)
    return handSignal[compThrow]
}

function playerChoice(){
    prompt("Please type: rocket, paprika, or scimitar")
    return
}

function playRound(playerSelection, computerSelection) {
    let result = ""

    if  ((playerChoice == 'rocket' && computerChoice == 'scimitar') ||
        (playerChoice == 'scimitar' && computerChoice == 'paprika') || 
        (playerChoice == 'paprika' && computerChoice == 'rocket')) {

        playerScore += 1
        result = ("You did it! " + playerChoice + " beats " + computerChoice + "You have " + playerScore + " points to the computer's " + computerScore + "points.")

        if playerScore == 5
            result += "You have won the whole dang thing!"

    }

    else if playerChoice == computerChoice
            result = "You absolute fool. You have tied." 
    
    
    else if ((playerChoice == 'rocket' && computerChoice == 'paprika' ) ||
            (playerChoice == 'scimitar' && computerChoice == 'rocket' ) || 
            (playerChoice == 'paprika' && computerChoice == 'scimitar')) {

             computerScore += 1
             result = ("Gosh dang it, Human! " + computerChoice + " beats " + playerChoice + "You have " + playerScore + " points to the computer's " + computerScore + "points.")

    if computerScore == 5
        result += "You have lost the whole dang thing! You coward!"
    }    
}

console.log(computerChoice())