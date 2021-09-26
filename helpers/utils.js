/**
 * Returns a string that has been purged from its line breaks.
 * Warning: we do not want this function to modify it's argument so we use a concatenation and slice to duplicate the input string.
 * @param line
 * @returns {string}
 */
function removeLineBreaks(line) {
    return (' ' + line).slice(1).replace(/\r?\n|\r/g, "");
}

/**
 * Checks if a number is odd
 * @param p the number to check
 * @returns {boolean} Whether the checked input is odd
 */
function isOdd(p) {
    return (p % 2) === 1;
}

/**
 * Checks if the given input a position int
 * @param p
 */
function isPositiveInt(p) {
    return typeof (p) === 'number' &&
        isFinite(p) &&
        Math.round(p) === p && p > 0;
}

/**
 * Checks if a starting coordinate of the lawn mower is valid
 * @param lawnMowerPosition The lawn mower coordinate to check
 * @param maxPosition The position max a lawn mower can be on the area
 * @returns {*|boolean} Whether the lawnMower coordinate is valid
 */
function isInLawn(lawnMowerPosition, maxPosition) {
    return lawnMowerPosition >= 0 && lawnMowerPosition <= maxPosition;
}

module.exports = {
    removeLineBreaks,
    isOdd,
    isPositiveInt,
    isInLawn
};
