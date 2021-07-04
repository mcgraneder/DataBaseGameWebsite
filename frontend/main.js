import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

//next we want to create an event lustener which detects if we clock
//on a board tile and then we can set the tile we clocked to an x or o
let tiles = document.querySelectorAll(".board-tile")
console.log(tiles);
//.forEach lets us loop through each tile
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        console.log("Tile Clocked");
        //tile.dataset.index returns the index of the tile we clock on
        console.log(tile.dataset.index);
        onTileClicked(tile.dataset.index);
    })
})

//we need to create a function that executes some logic when we
//click the tile if.e the event listener above works
function onTileClicked(index) {
    //call make move
    //update board
    //change turn
    game.makeMove(index);
    gameView.updateBoard(game);
    game.nextTurn();
    //hello
}