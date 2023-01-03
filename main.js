// some IIFE
// const foo = (() => { 
//      // people array is not accessible outside the IIFE
//      let people = ['bob', 'charlie', 'sue'];
     
//      const getPerson = (index) => {
//        return people[index]
//      }
 
//      const addPerson = (name) => {
//        people.push(name);
//      }
 
//      return { getPerson, addPerson } // this is the foo object
//  )(); 








// const gameBoard = (() => { 
//   const gameBoardArr = ['', '', '', '', '', '', '', '', '']; 

// //   function () { 
// //      for (let i = 0; i < 0; i++) { 
// //           document.getElementById(i).textContent = gameBoardArr[i]; 
// //      }
// //   }
  
//   const determinePlayerTurn = { 

// };
//   const determineWinner = {

//   }; 
  
//   return { gameBoardArr, determinePlayerTurn, determineWinner, renderGameBoard };
// })();   


// function createPlayer(name) { 
     
     
//      return { 
          
//      }
// }  


// const displayController = (() => { 
     
//      const printWinner = { 

//      } 


     
     
//      return { printWinner }
// })()




const gameBoard = (() => {  
  // generates board
  const board = ['', '', '', '', '', '', '', '','']; 

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



// const displayController = (() => { 
  
//   return { 
//     renderBoard 
//   }
  
// })() 




// function renderGameBoard () {  
// const boardContainer = document.querySelector('.board-container'); 
// //  document.body.append(boardContainer); 

//  for (let i = 0; i < 10; i++) { 
//    const boardSquares = document.createElement('div'); 
//    boardSquares.classList.add('styling-for-board-squares'); 
//    // apply stles 
//    boardContainer.append(boardSquares); 
//   }

// }  


function renderGameBoard () {  
  const boardContainer = document.querySelector('.board-container'); 
  
   for (let i = 0; i < 10; i++) {
     const boardSquares = document.createElement('div'); 
     boardSquares.classList.add('box');
     boardContainer.append(boardSquares);
    }
  }
  renderGameBoard(); 
