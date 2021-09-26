const commandLineService = require("./commandLineService");

describe("commandLineService", () => {


    describe("isCommandLineValid", () => {
        it("shall return false if we don't have 3 args", () => {
            expect(commandLineService.isCommandLineValid(["node", "index.js"])).toBe(false);
        });

        it("shall return false if there is no file option", () => {
            expect(commandLineService.isCommandLineValid(["node", "index.js", "folder=data.json"])).toBe(false);
        });

        it("shall return false if file doesn't end with txt", () => {
            expect(commandLineService.isCommandLineValid(["node", "index.js", "file=data.json"])).toBe(false);
        });

        it("shall return false for incorrect command line", () => {
            expect(commandLineService.isCommandLineValid(["node", "index.js", "file=X=data.txt"])).toBe(false);
        });

        it("shall return true for a valid input", () => {
            expect(commandLineService.isCommandLineValid(["node", "index.js", "file=data.txt"])).toBe(true);
        });
    });

    describe("getInputFilename", () => {
        it("shall return null for incorrect command line", () => {
            expect(commandLineService.getInputFilename(["node", "index.js"])).toBe(null);
        });

        it("shall return the file name for correct command line", () => {
            expect(commandLineService.getInputFilename(["node", "index.js", "file=data.txt"])).toBe("data.txt");
        });
    });
});