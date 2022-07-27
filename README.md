# ticTacToe
** Pseudo Code **

// store our game status element here to allow us to use it later

// Declare variables that we can use to track the state of the game as its played

// We will us gameActive to pause the game in case of an end scenario

// We will store our current player here, so we know who's turn it is

/*  We will store our current game state here, in the form of empty strings in an array will allow us to easily 
track played cells and validate the game state later on 
*/

/* Declare messages to display to the user during the game.Since we have some dynamic factors in the messages, namely the current player, we have to declare them as FUNCTIONS, so that the actual message gets created with current data every time we need it. 
*/

// We set the initial message to let the players know whose turn it is

// We update our internal game state to reflect the played move, as well as update the user interface to reflect the played move

// Check whether there are any values in our game state array that are still not populated with a player sign

// if we get to here, we know that no ones won the game yet and that there are still moves to be played, so we continue by changing the current player.

//  Save the clicked html element in a variable for later use

/* Grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid.
-- note that the getAttribute will return a string value. Since we need an actual number, so we will parse it to an integer(number)
*/

/*
Next up we need to check whether the call has already been played, or IF the game is  paused. IF either is true we will simply ignore the click.
*/

// If everything is in order we will proceed with game flow

// Finally we add our event listeners to the actual game cells, as well as our restart button