let playerA;
let playerB;

// Cache DOM:

const boardContainer = document.querySelector('.boardContainer');
const boardSquares = document.querySelectorAll('.box');

const boardSquaresArray = Array.from(boardSquares);

const startGameButton = document.querySelector('.start-game-btn');

const startGameFunction = startGameButton.addEventListener('click', function (e) {
  e.preventDefault();
  const playerInputValue1 = document.getElementById('player1-input-field').value;
  
  const playerInputValue2 = document.getElementById('player2-input-field').value;

   playerA = playerFactory(playerInputValue1, 'X'); // pass mark as a variable here `${}`

   playerB = playerFactory(playerInputValue2, 'O'); // pass mark as a variable here `${}`

  let outputField = document.querySelector('.main-text-output-field');
  
  outputField.textContent = `${playerA.name}'s turn`;

});

const playerFactory = (name, mark) => {
  return { name, mark };
};

// store the result of players choice after each turn,

const gameBoard = (() => {
  // generates board
  const board = new Array(9).fill('');
  const checkForWin = () => {
    let winner;
    let winningCombinations = [
     [board[0], board[1], board[2]],
     [board[3], board[4], board[5]],
     [board[6], board[7], board[8]],
     [board[0], board[3], board[6]],
     [board[1], board[4], board[7]],
     [board[2], board[5], board[8]],
     [board[0], board[4], board[8]],
     [board[2], board[4], board[6]],
    ];
      function isX(element) {
        return element === "X";
      }

      function isO(element) {
        return element === "O";
      }

       for (let i = 0; i < winningCombinations.length; i++) { 
        let singleWinningCombo = winningCombinations[i];
        if (singleWinningCombo.every(isX)) {
          winner = true;
          displayController.printWinner(winner);
          break;
        } else if (singleWinningCombo.every(isO)) {
          winner = false;
          displayController.printWinner(winner);
          break;
        } else if (gameBoard.board.every(element => element !== '')) {
          winner = 'draw';
          displayController.printWinner(winner);
          break;
        }
      }
      // gameBoard.checkForWin();
      // displayController.printWinner(winner);
      return winner;
    };

  // checkForWin(board); 

    const setCell = (index, value) => {
    // function that updates the contents of a given array index
    // if the index is empty fill it, 
    // else the index is not empty (full) don't fill, just return the board
      board[index] = value;
      return board;
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
      board,
      setCell,
      resetBoard,
      getBoard,
      checkForWin,
      resetBoard,
    };
})();

// put update board within gameBoard module
const displayController = (() => {

const boardCells = document.querySelectorAll('.box');
const boardCellsArray = Array.from(boardSquares);
let playerTurn = 1;

const updateBoard = (e) => {
    const cellIndex = e.target.getAttribute('data-cell');
    if (playerTurn === 1) {
      let textField = document.querySelector('.main-text-output-field');
      textField.textContent = `${playerB.name}'s turn`;
      gameBoard.setCell(cellIndex, 'X'); // change player mark here `${}`
      gameBoard.checkForWin();
      playerTurn = 2;
    } else {
      let textField = document.querySelector('.main-text-output-field');
      textField.textContent = `${playerA.name}'s turn`;
      gameBoard.setCell(cellIndex, 'O'); // change player mark here `${}`
      gameBoard.checkForWin();
      playerTurn = 1;
    }
  updateDOMCells();
};

const updateDOMCells = () => {
    boardSquaresArray.forEach(cell => {
      let cellID = cell.id;
      let value = gameBoard.board[cellID];
      cell.textContent = `${value}`;
    });
};

const printWinner = (winner) => {
    if (winner === true) {
      let printWinnerDOM = document.querySelector('.main-text-output-field');
      printWinnerDOM.textContent = `${playerA.name} Wins!`;
    } else if (winner === false) {
      let printWinnerDOM = document.querySelector('.main-text-output-field');
      printWinnerDOM.textContent = `${playerB.name} Wins!`;
    } else if (winner === 'draw') {
      let printWinnerDOM = document.querySelector('.main-text-output-field');
      printWinnerDOM.textContent = 'Draw';
    }
  };

  return {
    printWinner,
    updateBoard,
    updateDOMCells,
  };
})();

boardSquaresArray.forEach(cell => {
  cell.addEventListener('click', function (e){
    displayController.updateBoard(e);
  });
});

// displayController.updateBoard();

displayController.updateDOMCells();

gameBoard.checkForWin(gameBoard.board);

// displayController.printWinner(winner);






// console.log(gameBoard.checkForWin(gameBoard.board));
// let playerA;
// let playerB;

// // Cache DOM:

// const boardContainer = document.querySelector('.boardContainer');
// const boardSquares = document.querySelectorAll('.box');

// const boardSquaresArray = Array.from(boardSquares);


// const startGameButton = document.querySelector('.start-game-btn');

// const startGameFunction = startGameButton.addEventListener('click', function (e) {
//   e.preventDefault();
  
//   const playerInputValue1 = document.getElementById('player1-input-field').value;
  
//   const playerInputValue2 = document.getElementById('player2-input-field').value;
  
//    playerA = playerFactory(playerInputValue1, 'X');

//    playerB = playerFactory(playerInputValue2, 'O'); 

//   let outputField = document.querySelector('.main-text-output-field');
  
//   outputField.textContent = `${playerA.name}'s turn`;

// });

// const playerFactory = (name, mark) => {
//   return { name, mark };
// };

// const gameBoard = (() => {
//   // generates board
//   const board = new Array(9).fill('');

//   const checkForWin = (marker) => {
//     /* something to store all possible wins */
//     // then check if one of those win conditions matches the board,
//     //  for the current marker?
//   };

//   const setCell = (index, value) => {
//     // function that updates the contents of a given array index
//     board[index] = value;
//     return board;
//   };

//   const resetBoard = () => {
//     // I don't ever return the actual board! I return
//     //  a static copy of the board instead, each time `getBoard` gets called.
//     // function that resets the board to empty
//     board = new Array(9).fill('');
//   };

//   const getBoard = () => {
//     // a function that returns a copy of the board
//     return [...board];
//   };

//   return {
//     board,
//     setCell,
//     resetBoard,
//     getBoard,
//     checkForWin,
//     resetBoard,
//   };
// })();


// const displayController = (() => {

// const boardCells = document.querySelectorAll('.box');
// const boardCellsArray = Array.from(boardSquares);
// // console.log(boardCellsArray);
// let playerTurn = 1;

// const updateBoard = (e) => {
//   const cellIndex = e.target.getAttribute('data-cell');
//   // console.log(cellIndex);

//   if (playerTurn === 1) {
//     gameBoard.setCell(cellIndex, 'X');
//     playerTurn = 2;
//   } else {
//     gameBoard.setCell(cellIndex, 'O');
//     playerTurn = 1;
//   }
//   updateDOMCells();
// }

// const updateDOMCells = () => {
//   // We are making the marks with updateBoard function, now we must grab the module,
//   // then grab the board, key into the board, then return the copy of the board 
//   // so it can be printed and updated to the DOM.
//   // console.log(gameBoard.board);
//   const grabTheBoard = gameBoard.board;
//   // boardContainer.append(grabTheBoard);
//   document.body.append(grabTheBoard);
//   // document.body.append(grabTheBoard);

  
//   // gameBoard.getBoard();
//   // looks at the board in gameboard module, reacts and changes to the DOM.
// }
// // console.log(gameBoard.board);

// boardCellsArray.forEach(cell => {
//   cell.addEventListener('click', updateBoard);
// });

//   return {
//     updateBoard,
//     updateDOMCells,
//   };
// })();

// boardSquaresArray.forEach(cell => {
//   cell.addEventListener('click', function(e){
//     displayController.updateBoard(e);
//   });
// });

// // displayController.updateBoard();

// displayController.updateDOMCells();


// let playerA;
// let playerB;

// // Cache DOM:

// const boardContainer = document.querySelector('.boardContainer');
// const boardSquares = document.querySelectorAll('.box');

// const boardSquaresArray = Array.from(boardSquares);


// const startGameButton = document.querySelector('.start-game-btn');

// const startGameFunction = startGameButton.addEventListener('click', function (e) {
//   e.preventDefault();
  
//   const playerInputValue1 = document.getElementById('player1-input-field').value;
  
//   const playerInputValue2 = document.getElementById('player2-input-field').value;
  
//    playerA = playerFactory(playerInputValue1, 'X');

//    playerB = playerFactory(playerInputValue2, 'O'); 

//   let outputField = document.querySelector('.main-text-output-field');
  
//   outputField.textContent = `${playerA.name}'s turn`;

// });

// const playerFactory = (name, mark) => {
//   return { name, mark };
// };

// const gameBoard = (() => {
//   // generates board
//   const board = new Array(9).fill('');

//   const checkForWin = (marker) => {
//     /* something to store all possible wins */
//     // then check if one of those win conditions matches the board,
//     //  for the current marker?
//   };

//   const setCell = (index, value) => {
//     // function that updates the contents of a given array index
//     board[index] = value;
//     return board;
//   };

//   const resetBoard = () => {
//     // I don't ever return the actual board! I return
//     //  a static copy of the board instead, each time `getBoard` gets called.
//     // function that resets the board to empty
//     board = new Array(9).fill('');
//   };

//   const getBoard = () => {
//     // a function that returns a copy of the board
//     return [...board];
//   };

//   return {
//     board,
//     setCell,
//     resetBoard,
//     getBoard,
//     checkForWin,
//     resetBoard,
//   };
// })();


// const displayController = (() => {

// const boardCells = document.querySelectorAll('.box');
// const boardCellsArray = Array.from(boardSquares);
// // console.log(boardCellsArray);
// let playerTurn = 1;

// const updateBoard = (e) => {
//   const cellIndex = e.target.getAttribute('data-cell');
//   // console.log(cellIndex);

//   if (playerTurn === 1) {
//     gameBoard.setCell(cellIndex, 'X');
//     playerTurn = 2;
//   } else {
//     gameBoard.setCell(cellIndex, 'O');
//     playerTurn = 1;
//   }
//   updateDOMCells();
// }

// const updateDOMCells = () => {
//  // get the cells, add textContent to each cell
//   // what are we adding to each cell ? 
//   boardSquaresArray.forEach(cell => { 
//     cell.addEventListener('click', function(){
//     let value =  gameBoard.board;
//     // console.log(value);
//     cell.textContent = `${value}`;
      
//     })
    
//   })
//   // const grabTheBoard = gameBoard.board;
//   // boardContainer.append(grabTheBoard);
//   // document.body.append(grabTheBoard);
//   // document.body.append(grabTheBoard);

  
//   // gameBoard.getBoard();
//   // looks at the board in gameboard module, reacts and changes to the DOM.
// }
// // console.log(gameBoard.board);

// boardCellsArray.forEach(cell => {
//   cell.addEventListener('click', updateBoard);
// });

//   return {
//     updateBoard,
//     updateDOMCells,
//   };
// })();

// boardSquaresArray.forEach(cell => {
//   cell.addEventListener('click', function(e){
//     displayController.updateBoard(e);
//   });
// });

// // displayController.updateBoard();

// displayController.updateDOMCells();




// let playerA;
// let playerB;

// // Cache DOM:

// const boardContainer = document.querySelector('.boardContainer');
// const boardSquares = document.querySelectorAll('.box');

// const boardSquaresArray = Array.from(boardSquares);


// const startGameButton = document.querySelector('.start-game-btn');

// const startGameFunction = startGameButton.addEventListener('click', function (e) {
//   e.preventDefault();
  
//   const playerInputValue1 = document.getElementById('player1-input-field').value;
  
//   const playerInputValue2 = document.getElementById('player2-input-field').value;
  
//    playerA = playerFactory(playerInputValue1, 'X');

//    playerB = playerFactory(playerInputValue2, 'O'); 

//   let outputField = document.querySelector('.main-text-output-field');
  
//   outputField.textContent = `${playerA.name}'s turn`;

// });

// const playerFactory = (name, mark) => {
//   return { name, mark };
// };

// const gameBoard = (() => {
//   // generates board
//   const board = new Array(9).fill('');

//   const checkForWin = (marker) => {
//     /* something to store all possible wins */
//     // then check if one of those win conditions matches the board,
//     //  for the current marker?
//   };

//   const setCell = (index, value) => {
//     // function that updates the contents of a given array index
//     board[index] = value;
//     return board;
//   };

//   const resetBoard = () => {
//     // I don't ever return the actual board! I return
//     //  a static copy of the board instead, each time `getBoard` gets called.
//     // function that resets the board to empty
//     board = new Array(9).fill('');
//   };

//   const getBoard = () => {
//     // a function that returns a copy of the board
//     return [...board];
//   };

//   return {
//     board,
//     setCell,
//     resetBoard,
//     getBoard,
//     checkForWin,
//     resetBoard,
//   };
// })();


// const displayController = (() => {

// const boardCells = document.querySelectorAll('.box');
// const boardCellsArray = Array.from(boardSquares);
// // console.log(boardCellsArray);
// let playerTurn = 1;

// const updateBoard = (e) => {
//   const cellIndex = e.target.getAttribute('data-cell');
//   // console.log(cellIndex);

//   if (playerTurn === 1) {
//     gameBoard.setCell(cellIndex, 'X');
//     playerTurn = 2;
//   } else {
//     gameBoard.setCell(cellIndex, 'O');
//     playerTurn = 1;
//   }
//   updateDOMCells();
// }

// const updateDOMCells = () => {
//   // We are making the marks with updateBoard function, now we must grab the module,
//   // then grab the board, key into the board, then return the copy of the board 
//   // so it can be printed and updated to the DOM.
//   // console.log(gameBoard.board);
//   const grabTheBoard = gameBoard.board;
//   boardContainer.append(grabTheBoard);
//   document.append(boardContainer);
//   // document.body.append(grabTheBoard);

  
//   // gameBoard.getBoard();
//   // looks at the board in gameboard module, reacts and changes to the DOM.
// }
// // console.log(gameBoard.board);

// boardCellsArray.forEach(cell => {
//   cell.addEventListener('click', updateBoard);
// });

//   return {
//     updateBoard,
//     updateDOMCells,
//   };
// })();

// boardSquaresArray.forEach(cell => {
//   cell.addEventListener('click', function(e){
//     displayController.updateBoard(e);
//   });
// });

// // displayController.updateBoard();

// displayController.updateDOMCells();

// hey guys I am running into a problem with ttt project, 

// Problem: I have a function which 'listen to' and will update/print to the DOM depending on what is
// inside the board, I am not sure why I cannot render the board, I am grabbing the board from
// the gameboard module, then trying to append it to the board container then append to the DOM
// 

// how can I render the updated board to the DOM? 

// displayController.playerTurn();

// displayController.renderBoardToDOM();

// displayController.printMark();

// displayController.printOutput(); 

// bradly example code start

// const gameBoard = (function() {
//   const board = new Array(9).fill('')

//   function setCell(index, value) {
//     board[index] = value
//     return board
//   }

//   return {
//     board,
//     setCell
//   }
// })()

// const displayController = (function() {
//   // assume each square has a data-cell attribute say what cell it should update on gameboard
//   const boardSquares = document.querySelectorAll(".box");
//   const playerTurn = 1

//   function updateBoard(e) {
//     const cellIndex = e.target.getAttribute('data-cell')
//     // player turns could probably even be handled in gameBoard
//     if(playerTurn === 1) {
//       gameboard.setCell(cellIndex, 'X')
//       playerTurn = 2
//     } else {
//       gameboard.setCell(cellIndex, 'O')
//       playerTurn = 1
//     }

//     updateDOMCells()
//   }

//   function updateDOMCells() {
//     /* a function that looks at gameboard.board and renders ('reacts to') changes in it to the DOM */
//   }

//   boardSquares.forEach(cell => {
//     cell.addEventListener('click', updateBoard)
//   })
// })() 

// bradly example code end

// function printSomething () {
//   for (let i = 0; i < boardSquaresArray.length; i++) {
//     let square = boardSquaresArray[i];
//     square.addEventListener('click', function(e){ 
//       square.textContent = 'X';
//       document.append(square);
//     })
//   }
// }

// printSomething();



















// let playerA;
// let playerB;

// // Cache DOM:

// const boardContainer = document.querySelector('.boardContainer');
// const boardSquares = document.querySelectorAll('.box');

// const boardSquaresArray = Array.from(boardSquares);

// // function to determine players turn
// // function playerTurn() {
// //   playerOneTurn = 'true';
// //   for (let i = 0; i < boardSquaresArray.length; i++) {
// //     const cell = boardSquaresArray[i];
// //     if (playerOneTurn === true) {
// //       cell.textContent = `${playerA.mark}`;
// //     } else if (playerOneTurn === false) {
// //       cell.textContent = `${playerB.mark}`;
// //     }
// //   }
// // }

// // playerTurn();

// // make a function which can switch players and allow the player to make their specified mark.

// const gameBoard = (() => {
//   // generates board
//   const board = ['', '', '', '', '', '', '', '', ''];

//   const checkForWin = (marker) => {
//     /* something to store all possible wins */
//     // then check if one of those win conditions matches the board,
//     //  for the current marker?
//   };

//   const setCell = (index, value) => {
//     // function that updates the contents of a given array index
//   };

//   const resetBoard = () => {
//     // I don't ever return the actual board! I return
//     //  a static copy of the board instead, each time `getBoard` gets called.
//     // function that resets the board to empty
//     board = new Array(9).fill('');
//   };

//   const getBoard = () => {
//     // a function that returns a copy of the board
//     return [...board];
//   };

//   const startGameButton = document.querySelector('.start-game-btn');

//   const startGameFunction = startGameButton.addEventListener('click', function (e) {
//     e.preventDefault();
    
//     const playerInputValue1 = document.getElementById('player1-input-field').value;
    
//     const playerInputValue2 = document.getElementById('player2-input-field').value;
    
//      playerA = playerFactory(playerInputValue1, 'X');
  
//      playerB = playerFactory(playerInputValue2, 'O');

//      displayController.printOutput();
//   });
  
//   const playerFactory = (name, mark) => {
//     return { name, mark };
//   };

//   // const player1 = (playerFactory.name, playerFactory.mark);
//   // const player2 = (playerFactory.name, playerFactory.mark);

//   return {
//     setCell,
//     resetBoard,
//     getBoard,
//     checkForWin,
//     resetBoard,
//   };
// })();

// const displayController = (() => {
//   const renderBoardToDOM = function () {
//     const boardContainer = document.querySelector('.board-container');

//     for (let i = 0; i < 9; i++) {
//       const boardSquares = document.createElement('div');
//       boardSquares.classList.add('box');
//     }
//   // }
//     // boardContainer.append(boardSquares);
//   };

// const printMark = () => {
//     for (let i = 0; i < boardSquaresArray.length; i++) {
//       const square = boardSquaresArray[i];
//       square.addEventListener('click', function (e) {
//         square.textContent = 'X';
//         // document.body.append(square);
//       });
//     }
//   };

//   const printOutput = () => {
//     let outputContainer = document.querySelector('.main-text-output-field');
//     outputContainer.textContent = `${playerA.name}'s turn`;
//   };

//   return {
//     renderBoardToDOM,
//     printOutput,
//     printMark,
//   };
// })();

// displayController.renderBoardToDOM();

// displayController.printOutput();

// displayController.printMark();
// const printMark = () => {
//   for (let i = 0; i < boardSquaresArray.length; i++) {
//    let cell = boardSquaresArray[i]; 
//     createEventListener(cell);
//   }
// }

// printMark();

// const createEventListener = (cell) => { 
// cell.addEventListener('click', function (e){
//       cell.textContent = 'X';
//       document.body.append(cell);
// });
// };
// createEventListener();


// function printSomething () {
//   for (let i = 0; i < boardSquaresArray.length; i++) {
//     let square = boardSquaresArray[i];
//     square.addEventListener('click', function(e){ 
//       square.textContent = 'X';
//       document.append(square);
//     })
//   }
// }

// printSomething();


// let playerA;
// let playerB;

// // Cache DOM:

// // const boardContainer = document.querySelector('.boardContainer');
// // const boardSquares = document.querySelectorAll('.box');

// // let boardSquaresArray = Array.from(boardSquares); 

// const boardContainer = document.querySelector('.boardContainer');
// const boardSquares = document.querySelectorAll('.box');

// let boardSquaresArray = Array.from(boardSquares);

// //  function printSomething() {
// //   for (let i = 0; i < boardSquaresArray.length; i++) {
// //     let square = boardSquaresArray[i];
// //     square.addEventListener('click', function(e){ 
// //       square.textContent = 'X';
// //       document.append(square);
// //       // call a function and pass in it's ID 
// //     })
// //   }
// // }

// // printSomething();

// // handles all game logic,
// const gameBoard = (() => {
//   // const board = document.querySelector('.board-container');
  
//   // const boardCells = document.querySelectorAll('.box');

//   // const boardCellsArray = Array.from(boardCells);

  
//   // generates board, // attach the html container,
//   // const board = new Array(9).fill('');

//   const checkForWin = (marker) => {
//     /* something to store all possible wins */
//     // then check if one of those win conditions matches the board,
//     //  for the current marker?
//   };

//   const setCell = (index, value) => {
//     // function that updates the contents of a given array index
//     for (let i = 0; i < boardSquaresArray.length; i++) {
//       let cell = boardSquaresArray[i];
//       console.log(cell.id);
//       if (cell.id === boardSquaresArray[i].id) {
//       }
//     }
//   };

//   const resetBoard = () => {
//     // I don't ever return the actual board! I return
//     //  a static copy of the board instead, each time `getBoard` gets called.
//     // function that resets the board to empty
//     board = new Array(9).fill('');
//   };

//   const getBoard = () => {
//     // a function that returns a copy of the board
//     return [...board];
//   };

//   const startGameButton = document.querySelector('.start-game-btn');

//   const startGameFunction = startGameButton.addEventListener('click', function (e) {
//     e.preventDefault();
    
//     const playerInputValue1 = document.getElementById('player1-input-field').value;
    
//     const playerInputValue2 = document.getElementById('player2-input-field').value;
    
//      playerA = playerFactory(playerInputValue1, 'X');
  
//      playerB = playerFactory(playerInputValue2, 'O');

//      displayController.printOutput();
//   });
  
//   const playerFactory = (name, mark) => {
//     console.log(name);
//     console.log(mark);
//     return { name, mark };
//   };

//   // const player1 = (playerFactory.name, playerFactory.mark);
//   // const player2 = (playerFactory.name, playerFactory.mark);

//   return {
//     setCell,
//     resetBoard,
//     getBoard,
//     checkForWin,
//     resetBoard,
//   };
// })(); 


// // gameBoard.setCell();

// const displayController = (() => {
//   const renderBoardToDOM = function () {
//     const boardContainer = document.getElementById'board-container');

//     // for (let i = 0; i < 9; i++) {
//       // const boardSquares = document.createElement('div');
//       // const boardSquares = document.querySelector('.box');
//       // boardSquares.classList.add('box');
//       boardContainer.append(boardSquares);
//     // }
//   };
//   const fillPlayerMarker = () => {
//     for (let i = 0; i < boardSquaresArray.length; i++) {
//       let cell = boardSquaresArray[i];
//       cell.addEventListener('click', function(e){
//          cell.textContent = `${ playerA.mark }`;
//          document.append(cell);
//       });
//     }
//   };

//   fillPlayerMarker();

//   // for (let i = 0; i < boardSquaresArray.length; i++) {
//     //     let square = boardSquaresArray[i];
//     //     square.addEventListener('click', function(e){
//     //       square.textContent = 'X';
//     //       document.append(square);
//     //       // call a function and pass in it's ID 
//     //     })
//     //   }

//   const printOutput = () => {
//     let outputContainer = document.querySelector('.main-text-output-field');
//     // conditional inside to determine whose turn?
//     outputContainer.textContent = `${playerA.name}'s turn`;
//   };

//   return {
//     renderBoardToDOM,
//     printOutput,
//     fillPlayerMarker,
//   };
// })();

// displayController.renderBoardToDOM();

// displayController.printOutput();

// displayController.fillPlayerMarker();
// handle events when start game button is pressed

// const startGameButton = document.querySelector('.start-game-btn');

//  startGameButton.addEventListener('click', function (e) {
//   e.preventDefault();

//   const playerInputValue1 = document.getElementById('player1-input-field').value;

//   const player1Mark = 'X';

//   const playerInputValue2 = document.getElementById('player2-input-field').value;

//   const player2Mark = 'O';

//   createPlayerObject1(playerInputValue1, player1Mark);

//   createPlayerObject2(playerInputValue2, player2Mark);

// });

// function createPlayerObject(player1, player2) {
//   console.log(player1);
//   console.log(player2);
//   return {
//     player1,
//     player2,
//   };
// }

// factory function

// const createPlayerObject1 = (name, mark) => {
//   console.log(name);
//   console.log(mark);
//   return { name, mark };
// };

// const createPlayerObject2 = (name, mark) => {
//   console.log(name);
//   console.log(mark);
//   return { name, mark };
// }

// const makeAPlayer1 = createPlayerObject1('jurassic-5', 'O');

// const makeAPlayer2 = createPlayerObject2('Yo-yo', 'X');