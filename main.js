const gameBoard = (() => {
  // generates board
  const board = ['', '', '', '', '', '', '', '', ''];

  const checkForWin = (marker) => {
    /* something to store all possible wins */
    // then check if one of those win conditions matches the board,
    //  for the current marker?
  };

  const setCell = (index, value) => {
    // function that updates the contents of a given array index
  };

  const resetBoard = () => {
    // I don't ever return the actual board! I return
    //  a static copy of the board instead, each time `getBoard` gets called.
    // function that resets the board to empty
    board = new Array(9).fill('');
  };

  const getBoard = () => {
    // a function that returns a copy of the board
    return [...board];
  };

  return {
    setCell,
    resetBoard,
    getBoard,
    checkForWin,
    resetBoard,
  };
})();

// function renderGameBoard() {
//   const boardContainer = document.querySelector('.board-container');

//   for (let i = 0; i < 9; i++) {
//     const boardSquares = document.createElement('div');
//     boardSquares.classList.add('box');
//     boardContainer.append(boardSquares);
//   }
// }
// renderGameBoard();

// const displayController = (() => {
//   const renderBoardToDOM = function() {
//     const boardContainer = document.querySelector('.board-container');

//     for (let i = 0; i < 9; i++) {
//       const boardSquares = document.createElement('div');
//       boardSquares.classList.add('box');
//       boardContainer.append(boardSquares);
//     }
//   }
//   return {
//     renderBoardToDOM
//   }
// })()

const displayController = (() => { 
const renderBoardToDOM = function() {
  const boardContainer = document.querySelector('.board-container');

  for (let i = 0; i < 9; i++) {
    const boardSquares = document.createElement('div');
    boardSquares.classList.add('box');
    boardContainer.append(boardSquares);
  }
}
return { 
  renderBoardToDOM
}
})() 

displayController.renderBoardToDOM();
