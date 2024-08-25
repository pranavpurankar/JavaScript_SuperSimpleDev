// Saving score inside Object score
let score = JSON.parse(localStorage.getItem('score')) 
|| {
    wins:0,
    losses:0,
    ties:0
};

// Generating HTML and showing score
updateScoreElement();

// Button function
function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    // Conditional logic for Scissors
    if (playerMove === 'Scissors'){

        if (computerMove === 'Rock'){
            result = 'You Loose.';
        }
        else if (computerMove === 'Paper'){
            result = 'You Win.';
        }
        else if (computerMove === 'Scissors'){
            result = 'Tie.';
        }
    }
    // Conditional logic for Paper
    else if (playerMove === 'Paper'){

        if (computerMove === 'Rock'){
            result = 'You Win.';
        }
        else if (computerMove === 'Paper'){
            result = 'Tie.';
        }
        else if (computerMove === 'Scissors'){
            result = 'You Loose.';
        }
    }
    // Conditional logic for Rock
    else if (playerMove === 'Rock'){

        if (computerMove === 'Rock'){
            result = 'Tie.';
        }
        else if (computerMove === 'Paper'){
            result = 'You Loose.';
        }
        else if (computerMove === 'Scissors'){
            result = 'You win.';
        }
    }

    // Updating score
    if (result === 'You win.') {
        // score.wins = score.wins + 1;
        score.wins +=1;
    }
    else if (result === 'You Loose.') {
        score.losses +=1;
    }
    else if (result === 'Tie.') {
        score.ties +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();

    // Generating HTML and showing moves and result
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML 
    =`You
    <img src="assets/${playerMove}-emoji.png" class="move-icon">
    <img src="assets/${computerMove}-emoji.png" class="move-icon">
    Computer`

};

// Function for update score on HTML or WebPage
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = 
    `Wins:${score.wins}  Losses:${score.losses}  Ties: ${score.ties}`;
};

// Computer Move
function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    return computerMove;
}