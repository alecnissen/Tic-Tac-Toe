let playerA;
let playerB;

const boardContainer = document.querySelector('.boardContainer');
const boardSquares = document.querySelectorAll('.box');

const boardSquaresArray = Array.from(boardSquares);

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

const gameBoard = (() => {
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
      return winner;
    };

    const setCell = (index, value) => {
    if (board[index] === '') {
      board[index] = value;
  }
      return board;
    };

    const resetBoard = () => {
      board = new Array(9).fill('');
    };

    const getBoard = () => {
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

const displayController = (() => {

const boardCells = document.querySelectorAll('.box');
const boardCellsArray = Array.from(boardSquares);
let playerTurn = 1;

const updateBoard = (e) => {
    const cellIndex = e.target.getAttribute('data-cell');
    if (playerTurn === 1) {
      let textField = document.querySelector('.main-text-output-field');
      textField.textContent = `${playerB.name}'s turn`;
      gameBoard.setCell(cellIndex, 'X');
      gameBoard.checkForWin();
      playerTurn = 2;
    } else {
      let textField = document.querySelector('.main-text-output-field');
      textField.textContent = `${playerA.name}'s turn`;
      gameBoard.setCell(cellIndex, 'O');
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

displayController.updateDOMCells();

gameBoard.checkForWin(gameBoard.board);
