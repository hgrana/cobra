/**
 * snake JS file.
 */

// Generate and Refresh the snake
function generateSnake(movement = null) {
    // Remove all snakeTiles from the map
    $(".mapTile").removeClass("snakeTile");

    // Color the snake in the map and set the class to the tile;
    snakeConfig.snakePos.forEach(elem => {
        $("[x-tile=" + elem[0] + "][y-tile=" + elem[1] + "]").addClass("snakeTile");
    });

    // Call the snake movement function;
    if (movement !== null) snakeMovement();
}

//Snake's primal function;
function snakeMovement() {
    var movementInterval = setInterval(() => {
        let currentPos;

        switch (snakeConfig.direction) {
            case 0: // Snake is going UP
                currentPos = [...snakeConfig.snakePos];

                for (let i = 1; i < snakeConfig.snakePos.length; i++) {
                    snakeConfig.snakePos[i] = currentPos[i - 1];
                }

                snakeConfig.snakePos[0][1] -= 1;

                generateSnake();

                break;

            case 1: // Snake is going RIGHT
                currentPos = [...snakeConfig.snakePos];

                for (let i = 1; i < snakeConfig.snakePos.length; i++) {
                    snakeConfig.snakePos[i] = currentPos[i - 1];
                }

                snakeConfig.snakePos[0][0] += 1;

                generateSnake();

                break;

            case 2: // Snake is going DOWN

                break;

            case 3: // Snake is going LEFT

                break;

            default:
                break;
        }
    }, gameConfig.gameSpeed);
}