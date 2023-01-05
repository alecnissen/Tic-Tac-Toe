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

  const startGameButton = document.querySelector('.start-game-btn');

  const startGameFunction = startGameButton.addEventListener('click', function (e) {
    e.preventDefault();
    const playerInputValue1 = document.getElementById('player1-input-field').value;
    const player1Mark = 'X';
    const playerInputValue2 = document.getElementById('player2-input-field').value;
    const player2Mark = 'O';
    playerFactory1(playerInputValue1, player1Mark);
    playerFactory2(playerInputValue2, player2Mark);
  });

  const playerFactory1 = createPlayerObject1 = (name, mark) => {
    console.log(name);
    console.log(mark);
    return { name, mark };
  };

  const playerFactory2 = createPlayerObject2 = (name, mark) => {
    console.log(name);
    console.log(mark);
    return { name, mark };
  };

  return {
    setCell,
    resetBoard,
    getBoard,
    checkForWin,
    resetBoard,
    startGameFunction,
    playerFactory1,
    playerFactory2,
  };
})();


const displayController = (() => {
  const renderBoardToDOM = function () {
    const boardContainer = document.querySelector('.board-container');

    for (let i = 0; i < 9; i++) {
      const boardSquares = document.createElement('div');
      boardSquares.classList.add('box');
      boardContainer.append(boardSquares);
    }
  };
  return {
    renderBoardToDOM,
  };
})();

displayController.renderBoardToDOM();

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