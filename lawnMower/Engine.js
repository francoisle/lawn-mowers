const {checkInputData} = require("../services/inputFileService");
const engineHelper = require("../helpers/engineHelper");

const LawnMower = require("./LawnMower");
const Lawn = require("./Lawn");

/**
 * The engine responsible for running a scenario.
 * @param inputLines
 * @returns {{getPositions: (function(): {x, y, d}[]), execute: execute}|null}
 * @constructor
 */
function Engine(inputLines) {

    // Make sure the engine is initialized with valid data.
    if (!checkInputData(inputLines)) {
        return null;
    }

    // Some useful constants for computing moves.
    const areaSize = inputLines[0].split(" ");
    const lawn = new Lawn(+areaSize[0], +areaSize[1]);

    const lawnMowers = initLawnMowers();

    // Exposed functions
    /**
     * This functions causes all lawn mowers to execute their sequence of moves
     * Once this function exits, the lawn mowers are at their final positions
     */
    function execute() {
        lawnMowers.forEach(lawnMower => playLawnMower(lawnMower));
    }

    /**
     * Return the positions of all lawn mowers.
     * If called before execute, it returns their initial positions and if it is ran after
     * it returns their final positions.
     * @returns {{x, y, d}[]}
     */
    function getPositions() {
        return lawnMowers.map(lawnMower => return lawnMower.getPosition());
    }


    // Internal functions
    /**
     * Initialize the lawn mowers by creating the Lawn Mower object with the input file config
     * @returns {*[]}
     */
    function initLawnMowers() {
        const lawnMowers = [];
        for (let i = 1; i < inputLines.length; i += 2) {
            const initialPosition = inputLines[i].split(" ");
            const lawnMower = new LawnMower(
                +initialPosition[0],
                +initialPosition[1],
                initialPosition[2],
                inputLines[i + 1].split("")
            );
            lawnMowers.push(lawnMower);
        }

        return lawnMowers;
    }

    /**
     * This functions executes all the moves one by one for a lawn mower
     * Note that all the moves are executed so this functions effectively take one lawn mower
     * from its initial position to its final position.
     * @param lawnMower The lawn mower to move
     */
    function playLawnMower(lawnMower) {
        try {
            let {x, y, d} = lawnMower.getPosition();

            // Apply all the moves one by one
            // The moves need to be applied by the engine because only the engine knows the boundaries of the lawn and is its responsibility
            lawnMower.getMoves().forEach(move => ({
                newX: x,
                newY: y,
                newD: d
            } = engineHelper.applyMove(x, y, d, move, lawn.getMaxX(), lawn.getMaxY())));

            lawnMower.setPosition(x, y, d);
        } catch (err) {
            throw "An error occurred while trying to apply a move: " + err;
        }
    }

    return {
        execute,
        getPositions
    };
}

module.exports = Engine;
