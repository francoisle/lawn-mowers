/**
 * Representation of a Lawn
 * @param maxX int Max x coordinate on the lawn
 * @param maxY int Max y coordinate on the lawn
 * @returns {{getMaxX: (function(): *), getMaxY: (function(): *)}}
 * @constructor
 */
function Lawn(maxX, maxY) {

    function getMaxX() {
        return maxX;
    }

    function getMaxY() {
        return maxY;
    }

    return {
        getMaxX,
        getMaxY
    };
}

module.exports = Lawn;