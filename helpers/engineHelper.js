const inputFileService = require("../services/inputFileService");

/**
 * This functions computes the new position for a lawn mower by applying a move to a starting position.
 * @param x Initial x coordinate of the lawn mower
 * @param y Initial y coordinate of the lawn mower
 * @param d Initial direction of the lawn mower
 * @param move The move to apply (R, L, F)
 * @param maxX The x coordinate max in the lawn
 * @param maxY The y coordinate max in the lawn
 */
function applyMove(x, y, d, move, maxX, maxY) {

    // Check that the given move is a valid one.
    if (!inputFileService.isValidMove(move)) {
        throw "Invalid move: " + move;
    }

    let newX = x;
    let newY = y;
    let newD = d;

    switch (move) {
        case "R":
        case "L":
            newD = changeDirection(d, move);
            break;
        case "F":
            switch (d) {
                case "N":
                    if (y < maxY) {
                        newY = y + 1;
                    }
                    break;
                case "W":
                    if (x > 0) {
                        newX = x - 1;
                    }
                    break;
                case "S":
                    if (y > 0) {
                        newY = y - 1;
                    }
                    break;
                case "E":
                    if (x < maxX) {
                        newX = x + 1;
                    }
                    break;
            }
            break;
    }

    return {
        newX,
        newY,
        newD
    };
}

/**
 * Utility function that computes a new direction from an existing direction and an "L" or "R" move
 * @param initialDirection The initial direction before applying the move
 * @param move The move to apply
 * @returns {string} The new direction
 */
function changeDirection(initialDirection, move) {
    let newD = initialDirection;
    const directions = ["N", "E", "S", "W"];
    const index = directions.indexOf(initialDirection);
    if (move === "R") {
        newD = directions[(index + 1) % 4];
    }

    if (move === "L") {
        newD = directions[(index - 1 + 4) % 4];
    }

    return newD;
}

module.exports = {
    applyMove
};
