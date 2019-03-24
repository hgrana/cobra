/**
 * Main JS file.
 */

const leftKey = 37;
const rightKey = 39;
const upKey = 38;
const downKey = 40;

const gameConfig = {
    gameSpeed: 250,
    gameState: "stopped"
}

const snakeConfig = {
    snakePos: [[15, 16], [15, 17], [15, 18], [15, 19], [15, 20]],
    direction: 0 // 0 = UP, 1 = RIGHT, 2 = DOWN, 3 = LEFT
}

const mapConfig = {
    tileQty: 901
}

function generateMap() {
    var x = 1,
        y = 1;

    for (let i = 1; i < mapConfig.tileQty; i++) {
        $("#map").append("<span id='tile-" + i + "' x-tile='" + x + "' y-tile='" + y + "' class='mapTile'></span>");

        if (x % 30 === 0) {
            x = 1;
            y++;
        }else{
            x++;
        }
    }

    // Call function to generate Snake;
    generateSnake(true);

    // Remove the button
    $("#startGame").remove();
}