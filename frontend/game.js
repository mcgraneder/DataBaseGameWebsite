export default class Game {

    // the constructor is basically the tings that get set
    //on creation or website load
    
    constructor() {
        // console.log("game init");
        this.turn = "X";
        this.board = new Array(9);
        // console.log("HELOOOO");
        
        // for (let i = 0; i < 10; i++) {
        //     this.board.push(null);
        // }
        this.board = new Array(9).fill(null);
        
        // this.checkWin();
        // console.log(this.board);

    }

    //we need to make a function that handles the games turns
    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
            // console.log(this.turn);
        }
        else if (this.turn == "O") {
            this.turn = "X";
            // console.log(this.turn);

        }
    }

    //we need a function which lets a player make a move
    makeMove(index) {
        
        let gameFinished = this.endOfGame();
        if (gameFinished) {
            this.startNewGame();
            return;
        }
       
        if (this.board[index] != null) {
            return;
        }
        this.board[index] = this.turn; //X or O
        // this.checkWin();
        const winningCombination = this.checkWin();
        console.log("the winning combination is", winningCombination);
        if (!winningCombination) {
            this.nextTurn();
        }
       

    }

    checkWin() {
        console.log("bye");
        const win = [

            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ];

        for (let i = 0; i < win.length; i++) {
            const [a, b, c] = win[i];
           

            if (this.board[a] == "X" && this.board[b] == "X" && this.board[c] == "X") {
                
                console.log("You won")
                return win[i];
            }
            else if (this.board[a] == "O" && this.board[b] == "O" && this.board[c] == "O") {
                
                console.log("You won")
                return win
            }
           
        }

        // for (const combination of win) {
        //     const [a, b, c] = combination;

        //     if (this.board[a]) {
        //         if(this.board[a] == this.board[b] && this.board[b] === this.board[c] ) {
        //             console.log("You won")
        //             return combination;
        //         }
        //     }
        //     }
             
       
        return null
        

       
    }

    endOfGame() {
        let winningCombination = this.checkWin();
        if (winningCombination) {
            return true;
        }
        else {
            return false;
        }
    }

   
}