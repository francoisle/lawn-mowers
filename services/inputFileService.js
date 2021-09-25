const utils = require("../helpers/utils");

/**
 * Checks if an input file is valid
 * @param lines the lines of the input file to check
 */
function checkInputFile(lines) {
    if (!lines || lines.length === 0) {
        return null;
    }

    // Its length must be an odd number (initial position + (lawn mower starting position + lawn mower moves)+ = 1 + 2k; k number of lawn mowers)
    if (!utils.isOdd(lines.length)) {
        return false;
    }

    // Check format for area size: expecting 2 strictly positives integers
    const areaSize = lines[0].split(" ");
    if (areaSize.length !== 2 && (!utils.isPositiveInt(areaSize[0]) || !utils.isPositiveInt(areaSize[1]))) {
        return false;
    }

    // Check format for the lawn mower starting positions
    for (let i = 1; i < lines.length; i += 2) {
        const lawnMowerPosition = lines[i].split(" ");
        if (lawnMowerPosition.length !== 3 &&
            (!utils.isInLawn(areaSize[0], areaSize[0]) ||
                !utils.isInLawn(areaSize[1], areaSize[1]) ||
                !isValidDirection(areaSize[2]))) {
            return false;
        }
    }

    // Check for the lawn mower moves (instructions)
    for (let i = 2; i < lines.length; i += 2) {
        const moves = lines[i].split("");
        for (let d of moves) {
            if (!isValidMove(d)) {
                return false;
            }
        }
    }

    return true;
}

/**
 * Checks if a direction input is valid
 * @param direction the direction to check
 * @return Whether the check direction is valid
 */
function isValidDirection(direction) {
    return direction === "N" || direction === "E" || direction === "W" || direction === "S";
}

function isValidMove(move) {
    return move === "L" || move === "R" || move === "F";
}

module.exports = {
    checkInputFile,
    isValidMove
};
