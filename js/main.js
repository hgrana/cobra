/**
 * Main JS file.
 */

const gameConfig = {
    gameSpeed: 100,
    state: "stopped",
    interval: null,
    points: 0,
    controls: {
        leftKey: 37,
        rightKey: 39,
        upKey: 38,
        downKey: 40
    }
}

const snakeConfig = {
    snakePos: [[15, 16], [15, 17], [15, 18], [15, 19], [15, 20]],
    direction: 0 // 0 = UP, 1 = RIGHT, 2 = DOWN, 3 = LEFT
}

const mapConfig = {
    tileQty: 901
}

const appleConfig = {
    location: 0
}

function generateMap() {
    var x = 1,
        y = 1;

    //Clear the map before the render and set the vars;
    if (gameConfig.state === "gameover") {
        $("#map").html("");
        $("#points span").html("0");

        snakeConfig.snakePos = [[15, 16], [15, 17], [15, 18], [15, 19], [15, 20]];
        snakeConfig.direction = 0;
        gameConfig.points = 0;
    }

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
    generateApple();

    // Hide the button
    $("#startGame").hide();

    // Set the game state to running;
    gameConfig.state = "running";    
}

// Count points and print it;
function countPoints() {    
    gameConfig.points += 10;
    $("#points span").text(gameConfig.points);
}