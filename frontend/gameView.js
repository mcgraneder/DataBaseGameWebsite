export default class GameView {

    constructor() {
        console.log("init game view")
    }

    //we need to make a function that maps the borad Array
    //to the front end
    updateBoard(game) {
        console.log("this is a board ithin game view");
        console.log(game.board);

        //loop throug game board and print to screen
        for (let i = 0; i < game.board.length; i++) {
            // console.log(game.board[i]);
            //we need to now get the html tile index
            //we can do this using query selector and by adding a data index to
            //board tile elements
            const tile = document.querySelector(`.board-tile[data-index='${i}']`)
            console.log(tile);
            //ten we cxan print to the screen our index as we st the game
            //board at index i to whatever our tile.content is which is ether
            //going to be null and X or an O
            tile.textContent = game.board[i];
        }
        
    }
}