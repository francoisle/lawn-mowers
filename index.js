const commandLineService = require("./services/commandLineService");
const inputFileService = require("./services/inputFileService");
const io = require("./io/fileIO");
const Engine = require("./lawmMower/Engine");

// Lawn Mower entry point
(function () {
    // 1. Verify the format of the command the command line
    const args = process.argv;
    verifyCommandLine(args);

    // 2. Get and parse the input file
    const inputLines = parseInputFile(args);

    // 3. Run the scenario
    const engine = new Engine(inputLines);
    engine.execute();

    // 4. Print the result
    const finalPositions = engine.getPositions();
    printSummary(inputLines, finalPositions);
})();

/**
 * Checks if the command line is correct. We are expecting something like "npm start file=[filename].txt"
 * @param args
 */
function verifyCommandLine(args) {
    if (!commandLineService.isCommandLineValid(args)) {
        console.error("Invalid command line. \nExpected 'npm start file=[filename].txt'\n");
        process.exit(-1);
    }
}

function parseInputFile(args) {
    const filename = commandLineService.getInputFilename(args);
    const inputLines = io.readFile(filename);
    if (!inputFileService.checkInputFile(inputLines)) {
        console.error("Input file has incorrect area and/or lawn mowers settings.");
        process.exit(-1);
    }

    return inputLines;
}

function printSummary(inputLines, finalPositions) {
    console.log("Input file:");
    inputLines.forEach(l => console.log(l));

    console.log("\nOutput: (final position of mowers:");
    finalPositions.forEach(p => {
        console.log(`${p.x} ${p.y} ${p.d}`);
    });
}
