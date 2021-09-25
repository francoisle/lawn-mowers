/**
 * Functions providing services for command line related tasks
 */

/**
 * Parses a string into an array representing a command line
 * @param args an array of string container the command line
 * @returns true of false whether the command line is valid
 */
function isCommandLineValid(args) {
    // First we expect 3 elements: node.js, index.js and the input file
    if (!args || args.length !== 3) {
        return false;
    }

    // Check we have an input-file given as file=filename.txt
    const split = args[2].split("=");
    if (split.length === 2) {
        return split[1].endsWith(".txt");
    }

    // If we are here; we received something we didn't expect
    return false;
}


/**
 * Gets the filename from the commandLine
 * @param args an array of string container the command line
 * @return the filename if the command line is correct, null otherwise
 */
function getInputFilename(args) {
    if (!args || args.length !== 3) {
        return null;
    }

    const split = args[2].split("=");
    if (split.length === 2 && split[1].endsWith(".txt")) {
        return split[1];
    }
}

module.exports = {
    isCommandLineValid,
    getInputFilename
};