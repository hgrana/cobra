/**
 * Apple JS file.
 */

function generateApple() {
    var appleLocation = Math.floor(Math.random()*900);

    // Verify if the apple would be printed in the snake
    for (let i = 0; i < snakeConfig.snakePos.length; i++) {
        let thisId = parseInt($("[x-tile=" + snakeConfig.snakePos[i][0] + "][y-tile=" + snakeConfig.snakePos[i][1] + "]").attr("id").split("-")[1]);

        if (thisId === appleLocation) {
            appleLocation = Math.floor(Math.random()*900);
            i = 0;
        }
    }

    // Print the apple on the map;
    $("#tile-"+appleLocation).addClass("appleTile");
}