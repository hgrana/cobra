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
        let snakeHead = [...snakeConfig.snakePos[0]];

        switch (snakeConfig.direction) {
            case 0: // Snake is going UP                
                snakeHead[1] -= 1;
                moveSnake(snakeHead);
                generateSnake();

                break;

            case 1: // Snake is going RIGHT
                snakeHead[0] += 1;
                moveSnake(snakeHead);
                generateSnake();

                break;

            case 2: // Snake is going DOWN
                snakeHead[1] += 1;
                moveSnake(snakeHead);
                generateSnake();

                break;

            case 3: // Snake is going LEFT
                snakeHead[0] -= 1;
                moveSnake(snakeHead);
                generateSnake();

                break;

            default:
                break;
        }
    }, gameConfig.gameSpeed);
}

function moveSnake(head) {
    snakeConfig.snakePos.pop();
    snakeConfig.snakePos.unshift(head);
}