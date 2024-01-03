let winMsg = 'Victory';
let loseMsg = 'Crushing Defeat';
let tieMsg = 'Tie';
let moveList =['Rock','Paper','Scissors'];
let statusDisplay = document.querySelector('#status-head');
let moveDisplays = document.querySelectorAll('.move-display h2');
let buttons = document.querySelectorAll('button');

/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */

 function calcResult(move1, move2) {
    if(move1==0 && move2==2 || move1==2 && move2==1 || move1==1 && move2==0){
        return winMsg;
    }
    else if(move1==move2){
        return tieMsg;
    }
    else return loseMsg;
 }

 /**
  * @return {Number}   random number between 0 and 2
  */
 
 function randomMove() {
   return Math.floor(Math.random() * 3);
 }
 
 /**
  * Displays start state of game
  */
 
 function startGame() {
    statusDisplay.textContent = 'Choose!';
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = moveList[i];
        buttons[i].style.display = "inline-block";
        buttons[i].addEventListener("click", endGame);
      }
    for (let i = 0;i< moveDisplays.length;i++){
        moveDisplays[i].style.display = 'none';
    }

 }
 
 /**
  * Displays end state of game
  * @param {Event} event event containing information of users input.
  */
 
 function endGame(event) {
    let playerMove = moveList.indexOf(event.target.textContent);
  let computerMove = randomMove();
  statusDisplay.textContent = calcResult(playerMove, computerMove);
  moveDisplays.forEach(
    (moveDisplay) => (moveDisplay.style.display = "inline-block")
  );
  moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;
//   buttons.forEach((button, index) => {
//     if (index == 1) {
//       button.textContent = "Play Again";
//       button.removeEventListener("click", endGame);
//       button.addEventListener("click", startGame);
//     } else {
//       button.style.display = "none";
//     }
//   });
for(let i=0 ; i<buttons.length ; i++){
    
    if(i==1){
        buttons[i].textContent = "Play Again";
        buttons[i].removeEventListener("click", endGame);
        buttons[i].addEventListener("click", startGame);
    }
    else{
        buttons[i].style.display="none";
    }
}
}
 
 startGame();
