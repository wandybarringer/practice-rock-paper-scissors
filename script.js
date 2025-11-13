// Have to put the wins losses and ties on the global scope to be stored???
// Because if the variables were stored in the function, when the function starts again on replay they would go back to 0
// 5) Display score
// TODO: create some variable for win, loss and tie ✅
var wins = 0;
var losses = 0;
var ties = 0;

// Creating a function in order to be called if the user wants to play again

function play() {
  // 1) Ask user for their selection
  // TODO: Create selection options ✅
  //  created r p and s variables
  var options = ['r', 'p', 's'];
  // TODO: prompt the user for their choice ✅
  var userChoice = prompt('Choose r, p, or s');
  console.log(userChoice);

  // TODO: EDGE CASE: case sensitivity
  //   Had to put above the next edge case fix so that upper case won't trigger the if statement
  userChoice = userChoice.toLowerCase();
  // TODO: EDGE CASE: user doesn't pick r, p or s
  //   Kind of a backwards way - tried the other way around but wouldn't work because it would want the user to put in the full string
  //   This works because as long as options still includes the user's choice somewhere in the array, it continues, otherwise it runs the function again
  if (!options.includes(userChoice)) {
    alert('Must pick r, p, or s!');
    play();
  }

  // TODO: EDGE CASE: Empty submission
  if (!userChoice) {
    return;
  }
  // 2) Generate the computer's selection
  // TODO: random selection of r,p,s var index = math.floor(math.random * array.length) ✅
  var index = Math.floor(Math.random() * options.length);
  var compChoice = options[index];
  console.log(compChoice);

  // 3) Compare selections
  // TODO: if user picks r && comp picks s or user picks s && comp picks p, win ✅
  if (
    (userChoice === 'r' && compChoice === 's') ||
    (userChoice === 's' && compChoice === 'p') ||
    (userChoice === 'p' && compChoice === 'r')
  ) {
    console.log('Win');
    alert('You won! 😊');
    // TODO: update variables ✅
    wins++;
    console.log(wins);

    // TODO: if user picks s && comp picks r or user picks p && comp picks s, loss ✅
  } else if (
    (userChoice === 's' && compChoice === 'r') ||
    (userChoice === 'p' && compChoice === 's') ||
    (userChoice === 'r' && compChoice === 'p')
  ) {
    console.log('Loss');
    alert('You lost! 😢');
    losses++;
    console.log(losses);
    // TODO: if user and comp pick same, tie ✅
  } else {
    console.log('Tie');
    alert('It was a tie. 😐');
    ties++;
    console.log(ties);
  }
  // 4) Display results
  // TODO: show reults in popup ✅
  window.alert(`Wins:${wins} \nLosses:${losses} \nTies${ties}`);

  // 6) Ask to play again
  // TODO: Confirm popup to start back at prompt user to choose r p or s ✅
  var playAgainMsg = confirm('Would you like to play again?');

  if (playAgainMsg) {
    play();
  }
}

// Have to call the function to start on load
play();
