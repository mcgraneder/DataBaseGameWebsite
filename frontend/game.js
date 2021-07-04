export default class Game {

    // the constructor is basically the tings that get set
    //on creation or website load
    constructor() {
        // console.log("game init");
        this.turn = "X";
        this.board = new Array(9);
        
        // for (let i = 0; i < 10; i++) {
        //     this.board.push(null);
        // }
        this.board = new Array(9).fill(null);
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
        this.board[index] = this.turn; //X or O

    }
}