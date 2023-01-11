let playerA;
let playerB;

// Cache DOM:

const boardContainer = document.querySelector('.boardContainer');
const boardSquares = document.querySelectorAll('.box');

const boardSquaresArray = Array.from(boardSquares);

// let playerOneTurn = 'true';

// function to determine players turn
// function playerTurn() {
//   playerOneTurn = 'true';
//   for (let i = 0; i < boardSquaresArray.length; i++) {
//     const cell = boardSquaresArray[i];
//     if (playerOneTurn === true) {
//       cell.textContent = `${playerA.mark}`;
//     } else if (playerOneTurn === false) {
//       cell.textContent = `${playerB.mark}`;
//     }
//   }
// }

// playerTurn();

// make a function which can switch players and allow the player to make their specified mark.

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

// start game will just need to print player1 name, it just needs to print playersA name, the playerTurn function must dynamically switch between the two.

  const startGameButton = document.querySelector('.start-game-btn');

  const startGameFunction = startGameButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    const playerInputValue1 = document.getElementById('player1-input-field').value;
    
    const playerInputValue2 = document.getElementById('player2-input-field').value;
    
     playerA = playerFactory(playerInputValue1, 'X');

     playerB = playerFactory(playerInputValue2, 'O'); 

    let outputField = document.querySelector('.main-text-output-field');
    
    outputField.textContent = `${playerA.name}'s turn`;

  });
  
  const playerFactory = (name, mark) => {
    return { name, mark };
  };

  const player1 = (playerFactory.name, playerFactory.mark);
  const player2 = (playerFactory.name, playerFactory.mark);

  return {
    setCell,
    resetBoard,
    getBoard,
    checkForWin,
    resetBoard,
  };
})(); 


const displayController = (() => {
//   const renderBoardToDOM = function () {
//     const boardContainer = document.querySelector('.board-container');

//     for (let i = 0; i < 9; i++) {
//       const boardSquares = document.createElement('div');
//       boardSquares.classList.add('box');
//     }
//   } 
  // player turn function will house all the logic, print whose turn and make the mark
  // you will need an event listener on each cell, how can we work in an event listener for each cell,
  // do we need another function which can invert playersTurn? How can I change the status of playerTurn,
  // reassign the variable when the value changes,

  // hello everyone I am running into an issue with ttt project, Basically I made one function, 
  // which can switch players turn, print their name, and print their mark 
  // the problem I am having now is that only player1 will print, the conditional logic I have in the function 
  // will not print playerB, 
  // my question is how can I dynamically change the value of playerturn? 
  // it is defined in the global scope.
  // in my function, I am using conditional logic, that if turn === this, print this and make your mark 
  // else do this. The problem is playerOneTurn value never changes. 



  const playerTurn = () => {
  playerOneTurn = 'true';
  for (let i = 0; i < boardSquaresArray.length; i++) {
    const cell = boardSquaresArray[i];
    cell.addEventListener('click', function(){
    if (playerOneTurn === 'true') {
      let outputContainer = document.querySelector('.main-text-output-field');
      outputContainer.textContent = `${playerA.name}'s turn`;
      cell.textContent = `${playerA.mark}`;
      playerOneTurn = 'false';
    } else if (playerOneTurn === 'false') {
      let outputContainer = document.querySelector('.main-text-output-field');
      outputContainer.textContent = `${playerB.name}'s turn`;
      cell.textContent = `${playerB.mark}`;
      playerOneTurn = 'true';
    }
    });
  }
};

// playerTurn();

// const printMark = () => {
//     for (let i = 0; i < boardSquaresArray.length; i++) {
//       const square = boardSquaresArray[i];
//       square.addEventListener('click', function (e){
//         square.textContent = 'X';
//         // document.append(square);
//       });
//     }
// }

//   const printOutput = () => {
//     let outputContainer = document.querySelector('.main-text-output-field');
//     outputContainer.textContent = `${playerA.name}'s turn`;
//   };

  return {
    // renderBoardToDOM,
    // printMark,
    // printOutput,
    playerTurn,
  };
})();

displayController.playerTurn();

// displayController.renderBoardToDOM();

// displayController.printMark();

// displayController.printOutput();

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