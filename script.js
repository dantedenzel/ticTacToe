// store our game status element here to allow us to use it later
const statusDisplay = document.querySelector('.game--status')

// Declare variables that we can use to track the state of the game as its played


// We will us gameActive to pause the game in case of an end scenario
let gameActive = true;

// We will store our current player here, so we know who's turn it is
let currentPlayer = "X";
/*  We will store our current game state here, in the form of empty strings in an array will allow us to easily track played cells and validate the game state later on 
*/
let gameState = ["", "", "", "", "", "", "", "", ""]

/* Declare messages to display to the user during the game.Since we have some dynamic factors in the messages, namely the current player, we have to declare them as FUNCTIONS, so that the actual message gets created with current data every time we need it. 
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `Its's ${currentPlayer}'s turn`;
// We set the initial message to let the players know whose turn it is
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function resultValidation() {

}
function handleCellClick(clickedCellEvent) {
//  Save the clicked html element in a variable for later use
    const clickedCell = clickedCellEvent.target;
/* Grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid.
-- note that the getAttribute will return a string value. Since we need an actual number, so we will parse it to an integer(number)
*/
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
/*
Next up we need to check whether the call has already been played, or IF the game is  paused. IF either is true we will simply ignore the click.
*/
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
// If everything is in order we will proceed with game flow
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {

}
// Finally we add our event listeners to the actual game cells, as well as our restart button
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);