/**
 * Representation of a lawnMower.
 * This structure will also be used to store the location of the lawn mowers as they evolve on the lawn.
 * The Lawn Mower is mostly responsible for only remembering its own position (that is computed by the engine).
 *
 * If we needed we could also store the last executed move so that we could freeze and resume a lawn mower
 *
 * @param x0 The x starting position of the lawn mower
 * @param y0 The y starting position of the lawn mower
 * @param d0 The d starting position of the lawn mower
 * @param moves The list of moves for the lawn mower
 * @returns {{getPosition: (function(): {d: *, x: *, y: *}), toString: (function(): string), getMoves: (function(): *), setPosition: setPosition}}
 * @constructor
 */
function LawnMower(x0, y0, d0, moves) {
    let x = x0; // current x coordinate (on the West - East axis)
    let y = y0; // current y coordinate (on the North - South axis)
    let d = d0; // current direction (one of N, W, S, T)

    /**
     * Returns the list of the moves (instruction) set for this lawn mower
     * @returns {*}
     */
    function getMoves() {
        return moves;
    }

    /**
     * Returns the current position for this lawn mower
     * @returns {{x, y, d}}
     */
    function getPosition() {
        return {
            x,
            y,
            d
        };
    }

    /**
     * Updates the current position for this lawn mower
     * @param newX The new x coordinate
     * @param newY The new y coordinate
     * @param newD The new d coordinate
     */
    function setPosition(newX, newY, newD) {
        x = newX;
        y = newY;
        d = newD;
    }

    /**
     * Returns the state of the lawn mower: its starting position, its sequence of moves and its current position
     * @returns {string}
     */
    function toString() {
        return `Lawn Mower: (${x0}, ${y0}, ${d0}); ${getMoves()}; (${x}, ${y}, ${d})`;
    }

    return {
        getMoves,
        getPosition,
        setPosition,
        toString
    };
}

module.exports = LawnMower;
