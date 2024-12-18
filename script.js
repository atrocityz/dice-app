const dicesContainer = document.querySelector(".dice__dices");
const playerWinner = document.querySelector(".dice__player");
const rollBtn = document.querySelector(".dice__btn");

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

rollBtn.addEventListener("click", () => {
    render();
})

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    playerWinner.classList.remove("player--winner-1")
    playerWinner.classList.remove("player--winner-2")

    if (player1 === player2) {
        playerWinner.textContent = "DRAW!";
    } else if (player1 > player2) {
        playerWinner.textContent = "Player1 is Winner!";
        playerWinner.classList.add("player--winner-1")
    } else {
        playerWinner.textContent = "Player2 is Winner!";
        playerWinner.classList.add("player--winner-2")
    }

    dicesContainer.innerHTML = ``;
    dicesContainer.insertAdjacentHTML("beforeend", `
    <svg class="dices__dice dices__dice--green">
      <use xlink:href="sprites.svg#dice-${player1}-icon"></use>
    </svg>
    <svg class="dices__dice dices__dice--blue">
      <use xlink:href="sprites.svg#dice-${player2}-icon"></use>
    </svg>
    `)
}

render();