//Create Const for player's Score
const playerScore = document.getElementById('playerScore');

//Create var to track player's Score number
let playerScoreNum = 0;

function startGame() {
	alert('Are you sure you want to play a new Game')

}

function resetPlayerScore() {

	playerScoreNum = 0;
	playerScore.textContent = playerScoreNum;


}

function updateScore(){

	playerScoreNum++;
	playerScore.textContent = playerScoreNum;

}
