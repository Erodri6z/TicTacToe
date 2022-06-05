/*-------------------------------- Constants --------------------------------*/


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')


/*---------------------------- Variables (state) ----------------------------*/
let board 
let turn 
let winner
/*----------------------------- Event Listeners -----------------------------*/
 squareEls.forEach((square) => {
         square.addEventListener('click', handleClick)
         console.log(square)
        })
    /*-------------------------------- Functions --------------------------------*/
    
    
 init()
 function init(){
     board = [null, null, null, null, null, null, null, null, null]
     console.log('running, init?')
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
            }
        })
    console.log('running message')
    if(winner === null){
        messageEl.textContent = `It's Player ${turn}'s turn!`
    }else if (winner === 'T') {
        messageEl.textContent = `Its A Tie`
    }else{
        messageEl.textContent = `Player ${winner * -1} won`
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
            if(sum === 3 ||sum ===-3 ){
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

//     //     // if(Math.abs(board[0] + board[1] + board[2] === 3)){
    //         //         //     console.log('winner')
    //         //     console.log('winner')
    //else if(Math.abs(board[3] + board[4] + board[5] === 3)){
        //         // }else if(Math.abs(board[1] + board[4] + board[7] === 3)){
            //         //     console.log('winner')
            
            //         // }else if(Math.abs(board[2] + board[5] + board[8] === 3)){
                //         //     console.log('winner')
                
                //         // }else if(Math.abs(board[6] + board[7] + board[8] === 3)){
            //         //     console.log('winner')
            
            //         // }else if(Math.abs(board[0] + board[4] + board[8] === 3)){
                //         //     console.log('winner')
                
//         // }else if(Math.abs(board[2] + board[4] + board[6] === 3)){
    //         //     console.log('winner')
    
 /// console.log(winningCombos[0])
    
    // Step 6 - Handle a player clicking a square with a `handleClick` function
    
    // a) Create a function called `handleClick`. It will have an `evt` parameter.
    
  // b) Attach an event listener to the game board. On the `'click'` event, it 
  //    should call the `handleClick` function you created in 6a.
  
  // c) Obtain the index of the square that was clicked by "extracting" the 
  //    index from an `id` assigned to the element in the HTML. Assign this to 
  //    a constant called `sqIdx`.
  
  // d) If the `board` has a value at the `sqIdx`, immediately `return` because 
  //    that square is already taken. Also, if `winner` is not `null`
  //    immediately `return` because the game is over.
  
  // e) Update the `board` array at the `sqIdx` with the current value of
  //    `turn`.
  
  // f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //    `-1`, and vice-versa).
  
  // g) Set the `winner` variable if there's a winner by calling a new 
  //    function: `getWinner`.

  // h) All the state has been updated so we need to render our updated state 
  //    to the user by calling the `render` function we wrote earlier.
  
  // Step 7 - Build the `getWinner` function
  
  // a) Create a function called `getWinner`
  
  /* 
  * There are two methods you can use to find out if there is a winner.
  *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
  *
  * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */
  
  // b1) Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.
  
  // b2) For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.
  
  // c) If there is no winner, check to see if there is a tie. Set the `winner` 
  //    variable to `'T'` if there are no more nulls in the board array by 
  //    returning the string `'T'`.

  // d) If there is no winner and there isn’t a tie, return `null`.
  
  // Step 8 - Create Reset functionality
  
  // a) Add a reset button to the HTML document.
  
  // b) Store the new reset button element in a constant named `resetBtnEl`.
  
  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //  should call the `init` function you created in 3 
  
  
  //   winningCombos.forEach(winningCombos[idx]) {
//     idx = board[idx]
//      if((winningCombos[idx].reduce(a,b) => {
    //          return a+b
//         }) === 3) {
    
    //          console.log('winner')
    //         } 
//     }
// }