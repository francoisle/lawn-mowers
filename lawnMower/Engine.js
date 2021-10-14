const engineHelper = require("../helpers/engineHelper");

/**
 * The engine responsible for running a scenario.
 * @param inputLines
 * @returns {{execute: execute, getPositions: getPositions}}
 * @constructor
 */
const LawnMower = require("./LawnMower");
const {checkInputFile} = require("../services/inputFileService");

function Engine(inputLines) {

    // Make sure the engine is initialized with valid data.
    if (!checkInputFile(inputLines)) {
        return null;
    }

    // Some useful constants for computing moves.
    const areaSize = inputLines[0].split(" ");
    const maxX = areaSize[0];
    const maxY = areaSize[1];

    const lawnMowers = initLawnMowers();

    // Exposed functions
    /**
     * This functions causes all lawn mowers to execute their sequence of moves
     * One this function exit, the lawn mower are at their final positions
     */
    function execute() {
        lawnMowers.forEach(lawnMower => {
            playLawnMower(lawnMower);
        });
    }

    /**
     * Return the positions of all lawn mowers.
     * If call before execute, it returns their initial position and if it is run after
     * it returns their final position.
     * @returns {{x, y, d}[]}
     */
    function getPositions() {
        return lawnMowers.map(lawnMower => {
            return lawnMower.getPosition();
        });
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
     * Note that all the moves are executed at once so this functions effectively take one lawn mower
     * from its initial position to its final position.
     * @param lawnMower The lawn mower to move
     */
    function playLawnMower(lawnMower) {
        lawnMower.getMoves().forEach(move => {
            try {
                const {x, y, d} = lawnMower.getPosition();
                // The move needs to be applied by the engine because only the engine knows the boundary of the lawn
                const {newX, newY, newD} = engineHelper.applyMove(x, y, d, move, maxX, maxY);
                lawnMower.setPosition(newX, newY, newD);
            } catch (err) {
                throw "An error occurred while trying to apply a move: " + err;
            }
        });
    }

    return {
        execute,
        getPositions
    };
}

module.exports = Engine;
