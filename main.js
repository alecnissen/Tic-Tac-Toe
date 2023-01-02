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
  const board = new Array(9).fill(''); 

  const setCell = (index, value) => { 
    // function that updates the contents of a given array index
  };

  const resetBoard = () => { 
    // function that resets the board to empty 
  };

  const getBoard = () => { 
    // a function that returns a copy of the board 
  };

  return {
    setCell,
    resetBoard,
    getBoard,
  };
})();


