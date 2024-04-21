const X_CLASS = 'x'
const O_CLASS = 'o'
const WINNING_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const cellElements = document.querySelectorAll("[data-cell]")
const board = document.getElementById('game')
const restartBtn = document.getElementById('restartBtn')
const winningMessageElement = document.getElementById('end-game')
const winningMessageText = document.querySelector('[data-end-game]')
let oTurn

let player_1 = ''
let player_2 = ''
const player_1_name_element = document.getElementById('play1name')
const player_2_name_element = document.getElementById('play2name')
const statusMsg = document.getElementById('statusMsg')
const startGameElement= document.getElementById('start-game')
const startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startGameElement.classList.add('hide')
    player_1 = form.p1.value
    player_2 = form.p2.value
    player_1_name_element.innerText = player_1
    player_2_name_element.innerText = player_2
    statusMsg.innerText = `It's ${player_1}'s turn`
})
function changeStatus() {
    if (oTurn) {
        statusMsg.innerText = `It's ${player_2}'s turn`
        } else {
            statusMsg.innerText = `It's ${player_1}'s turn` 
}}


startGame()

function startGame() {
    oTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    statusMsg.innerText = `It's ${player_1}'s turn`
    winningMessageElement.classList.remove('show')
}

function handleClick(e) {
    const cell = e.target
    const currentClass = oTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
        switchTurns()
        setBoardHoverClass()
    }
    switchTurns()
    changeStatus()
    setBoardHoverClass()
}

restartBtn.addEventListener('click', startGame)

function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = 'Draw!'
    } else {
        winningMessageText.innerText = `${oTurn ? player_2 : player_1} wins!`
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    })
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function switchTurns() {
    oTurn = !oTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)
    if (oTurn) {
        board.classList.add(O_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBOS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}