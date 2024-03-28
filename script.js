
// Player Names
let names = [];
let playerNames = document.getElementById('playerNames');
playerNames.addEventListener('click', () => {
    let dialog = document.querySelector('dialog');
    dialog.showModal()
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault()
        let form = document.getElementById('form')
        const inputp1 = document.querySelector('#p1').value;
        const inputp2 = document.querySelector('#p2').value;
        names.push(inputp1)
        names.push(inputp2)
        let textp1 = document.querySelector('.play1name');
        textp1.textContent = inputp1;
        let textp2 = document.getElementById('play2name');
        textp2.textContent = inputp2;
        dialog.close()
        form.reset()
    })
})





// turns
let turn = 1;
console.log(turn)
console.log('player 1')

let gameCell = document.getElementById('game')
gameCell.addEventListener('click', () => {
    turn ++;
    console.log(turn)
    let status = document.getElementById('status')
    if (turn % 2 == 0) {
        console.log(names[1])
        status.textContent = "It's " + names[1] + "'s turn"
        // select cell (only if it hasnt already been selected)
        
        // let smallCell = document.getElementById('cell')
        // smallCell.textContent = "O";
        // update contents
        // check if game is over
        // update turn
        console.log('player 2')
    } else {
        status.textContent = "It's " + names[0] + "'s turn"
        // select cell (only if it hasnt already been selected)
        // update contents
        // check if game is over
        // update turn
        console.log(names[0])
        console.log('player 1')
    };
})








// Status


// New Game
let newGame = document.getElementById('new_game')
newGame.addEventListener('click', () => {
    turn = 1
    // clear board

})