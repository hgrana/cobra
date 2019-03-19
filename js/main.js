/**
 * Main JS file.
 */

function generateMap() {
    for (let i = 0; i < 900; i++) {
        $("#map").append("<span class='mapTile'></span>");
    }

    // Remove the button
    $("#startGame").remove();
}