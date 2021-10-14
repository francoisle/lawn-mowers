const fs = require("fs");

const utils = require("../helpers/utils");

/**
 * @param filename the name of the file to read
 * @ return a string array containing each lines of the file
 */
function readFile(filename) {
    let inputLines = [];

    try {
        const file = fs.readFileSync("./" + filename, "utf-8");
        // Split the lines
        inputLines = file.split("\n");

        // Clean the inputLines array
        inputLines = inputLines.map(e => utils.removeLineBreaks(e)).filter(e => e.length !== 0);
    } catch (err) {
        console.error("An error happened while trying to read the input file", err.message);
        return null;
    }

    return inputLines;
}

module.exports = {
    readFile
};
