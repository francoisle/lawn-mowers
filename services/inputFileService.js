const utils = require("../helpers/utils");

/**
 * Checks if an input file is valid
 * @param lines the lines of the input file to check
 */
function checkInputData(lines) {
    if (!lines || lines.length === 0 || !Array.isArray(lines)) {
        return false;
    }

    // It must have a least one lawn mower
    if (lines.length < 3) {
        return false;
    }

    // Its length must be an odd number (initial position + (lawn mower starting position + lawn mower moves)+ = 1 + 2k; k number of lawn mowers)
    if (!utils.isOdd(lines.length)) {
        return false;
    }

    // Check format for area size: expecting 2 strictly positives integers
    const areaSize = lines[0].split(" ");
    if (areaSize.length !== 2 || !utils.isPositiveInt(+areaSize[0]) || !utils.isPositiveInt(+areaSize[1])) {
        return false;
    }

    // Check format for the lawn mower starting positions
    for (let i = 1; i < lines.length; i += 2) {
        const lawnMowerPosition = lines[i].split(" ");
        if (lawnMowerPosition.length !== 3 ||
            (!utils.isInLawn(+lawnMowerPosition[0], +areaSize[0]) ||
                !utils.isInLawn(+lawnMowerPosition[1], +areaSize[1]) ||
                !isValidDirection(lawnMowerPosition[2]))) {
            return false;
        }
    }

    // Check for the lawn mower moves (instructions)
    for (let i = 2; i < lines.length; i += 2) {
        const moves = lines[i].split("");
        for (const move of moves) {
            if (!isValidMove(move)) {
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
    return ["N", "E", "W", "S"].includes(direction);
}

function isValidMove(move) {
    return ["L", "R", "F"].includes(move);
}

module.exports = {
    checkInputData,
    isValidMove
};
