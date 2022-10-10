let userThrow;
let compThrow;
let userScore = 0;
let compScore = 0;
const roundText = document.querySelector('#round');
let roundNumber = 1;
const userScoreE = document.querySelector('#userScoreE');
const compScoreE = document.querySelector('#compScoreE');  
const userNotice = document.querySelector('#userNotice');
const compNotice = document.querySelector('#compNotice');
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

function playRound(userThrow, compThrow) {
    if  ((userThrow == 'rocket' && compThrow == 'scimitar') ||
        (userThrow == 'scimitar' && compThrow == 'paprika') || 
        (userThrow == 'paprika' && compThrow == 'rocket')) {
        userScore++;
        result.textContent = "You did it! " + userThrow + " beats " + compThrow;
        userScoreE.textContent = userScore;

        if (userScore == 5){ 
            result.textContent = "You have won the whole dang thing!";
            alert("Game over");
            }
    }

    else if (userThrow == compThrow)
    result.textContent= "You absolute fool. You have tied.";

    else if ((userThrow == 'rocket' && compThrow == 'paprika' ) ||
             (userThrow == 'scimitar' && compThrow == 'rocket' ) || 
             (userThrow == 'paprika' && compThrow == 'scimitar')) {
             compScore++;
             compScoreE.textContent = compScore;
             result.textContent = "Gosh dang it, Human! " + compThrow + " beats " + userThrow;  
        if (compScore == 5){ 
            result.textContent = "You have lost the whole dang thing! You coward!";
            
           }
    }     
}

function game(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
                let userThrow= button.id;
                userNotice.textContent = userThrow;
                let compSign = Math.floor(Math.random()*3);
                let signal = ['rocket', 'paprika', 'scimitar'];
                let compThrow = signal[compSign];
                compNotice.textContent = compThrow;
                playRound(userThrow, compThrow);
                roundText.textContent= roundNumber;
                roundNumber++;
        })
    })

}
game();
