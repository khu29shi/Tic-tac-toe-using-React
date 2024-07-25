import React from 'react'

const isWinner = (board, symbol) => {

    //row
    if(board[0] === board[1] && board[1] === board[2] && board[2] === symbol) return true;
    if(board[3] === board[4] && board[4] === board[5] && board[5] === symbol) return true;
    if(board[6] === board[7] && board[7] === board[8] && board[8] === symbol) return true;


    //column
    if(board[0] === board[3] && board[3] === board[6] && board[6] === symbol) return true;
    if(board[1] === board[4] && board[4] === board[7] && board[7] === symbol) return true;
    if(board[2] === board[5] && board[5] === board[8] && board[8] === symbol) return true;


    //diagonal
    if(board[0] === board[4] && board[4] === board[8] && board[4] === symbol) return true;
    if(board[2] === board[4] && board[4] === board[6] && board[4] === symbol) return true;
    
  return "";
}

export default isWinner
