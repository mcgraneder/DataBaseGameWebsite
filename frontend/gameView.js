export default class GameView {

    constructor() {
        // console.log("init game view")
    }

    //we need to make a function that maps the borad Array
    //to the front end
    updateBoard(game) {
        // console.log("this is a board ithin game view");
        // sconsole.log(game.board);
        
        this.updateTurn(game);
        const winningCombination = game.checkWin();
        console.log(winningCombination);
        

        
        //loop throug game board and print to screen
        for (let i = 0; i < game.board.length; i++) {
        
            // console.log(game.board[i]);
            //we need to now get the html tile index
            //we can do this using query selector and by adding a data index to
            //board tile elements
            const tile = document.querySelector(`.board-tile[data-index='${i}']`)
            // console.log(tile);
            //ten we cxan print to the screen our index as we st the game
            //board at index i to whatever our tile.content is which is ether
            //going to be null and X or an O
            tile.textContent = game.board[i];
            tile.classList.remove("tiles-win");

            //we can create a variable called class type that will store the
            //class type of the x and o tiles corresponding to whch location they are at
            let classType = game.board[i] == "X" ? "tile-X" : "tile-O";

            //we can then use this classType class to style the innherHTML based on what class we have X or O
            tile.innerHTML = `<span class="${classType}">${game.board[i] ? game.board[i] : ""}</span>`

            if (winningCombination != null  && winningCombination.includes(i)) {
                console.log("made it")
                tile.classList.add("tiles-win");
            }
            
        }
        // console.log(game.board[0]);
        
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-x");
        let playerY = document.querySelector(".player-o");

        
        if (game.turn == "X") {
            playerX.classList.add('active');
            playerY.classList.remove('active');
        }
        else {
            playerY.classList.add('active');
            playerX.classList.remove('active');
        }
    } 
}