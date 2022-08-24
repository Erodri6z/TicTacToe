/*-------------------------------- Constants --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')

/*---------------------------- Variables (state) ----------------------------*/
let board 
let turn 
let winner
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
        square.addEventListener('click', handleClick)
        })
resetBtnEl.addEventListener('click',init)
    /*-------------------------------- Functions --------------------------------*/
    
    
init()
function init(){
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render()
    
    }
    function render(){
        board.forEach(function (board,idx) {
            if (board === 1) {
                squareEls[idx].textContent = 'X'
            }else if(board === -1) {
                squareEls[idx].textContent = 'O'
            }else if(board === null){
                squareEls[idx].textContent = ''
            }
        })
    if(winner === null){
        messageEl.textContent = `It's Player ${turn}'s turn!`
    }else if (winner === 'T') {
        messageEl.textContent = `Its A Tie`
    }else if (winner === turn){
        messageEl.textContent = `Player ${winner * -1} won`
    }else{
        messageEl.textContent = ''
    }
}


function handleClick(evt){
        const sqIdx = parseInt(evt.target.id.slice(2))
    if(board[sqIdx] !== null || winner !== null){
            return
    }
    board[sqIdx] = turn
    turn = turn * -1
    getWinner()
    render()
}

function getWinner(){

 const winningCombos = [
        [board[0], board[1], board[2]],
        [board[0], board[3], board[6]],
        [board[3], board[4], board[5]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],
        [board[6], board[7], board[8]],
        [board[0], board[4], board[8]],
        [board[2], board[4], board[6]]
    ]
for(let i = 0 ; i < winningCombos.length; i++){
    let sum = (winningCombos[i][0] + winningCombos[i][1] + winningCombos[i][2])
    if(sum === 3 || sum ===-3 ){
        winner = turn
        return
        }else if(board.includes(null) === false)  {
            winner = 'T'
            return
        }else{
            winner = null
        }
    }
}
