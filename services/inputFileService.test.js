const inputFileService = require("./inputFileService");

describe("inputFileService", () => {
    describe("isValidMove", () => {
        it("shall return true for R valid move", () => {
            expect(inputFileService.isValidMove("R")).toBe(true);
        });

        it("shall return true for L valid move", () => {
            expect(inputFileService.isValidMove("L")).toBe(true);
        });

        it("shall return true for F valid move", () => {
            expect(inputFileService.isValidMove("F")).toBe(true);
        });

        it("shall return false for an unknown move", () => {
            expect(inputFileService.isValidMove("B")).toBe(false);
        });
    });


    describe("checkInputFile", () => {

        it("shall return true for a correct starting area (and a correct following)", () => {
            expect(inputFileService.checkInputFile(["2 7", "1 2 N", "LFFF"])).toBe(true);
        });

        describe("argument check", () => {
            it("shall return false if input is null", () => {
                expect(inputFileService.checkInputFile(null)).toBe(false);
            });

            it("shall return false if input is an empty array", () => {
                expect(inputFileService.checkInputFile([])).toBe(false);
            });

            it("shall return false if input is not an array", () => {
                expect(inputFileService.checkInputFile(35)).toBe(false);
            });

            it("shall return false if input size is even", () => {
                expect(inputFileService.checkInputFile([1, 2])).toBe(false);
            });
        });

        describe("First line check", () => {
            it("shall return false if first line has not an int for maxX", () => {
                expect(inputFileService.checkInputFile(["a 2"])).toBe(false);
            });

            it("shall return false if first line has not an int for maxY", () => {
                expect(inputFileService.checkInputFile(["3 a"])).toBe(false);
            });

            it("shall return false if first line has a negative int for maxY", () => {
                expect(inputFileService.checkInputFile(["3 -1"])).toBe(false);
            });

            it("shall return false if first line has a negative int for maxX", () => {
                expect(inputFileService.checkInputFile(["-2 7"])).toBe(false);
            });

            it("shall return false if first line has not the number of expected data", () => {
                expect(inputFileService.checkInputFile(["2 7 4"])).toBe(false);
            });
        });

        describe("Lawn mowers starting position", () => {
            it("shall return false for incorrect number of symbols in the 2nd line", () => {
                expect(inputFileService.checkInputFile(["2 7", "2 8 N X", "LFFF"])).toBe(false);
            });

            it("shall return false for out of bound x starting position", () => {
                expect(inputFileService.checkInputFile(["2 7", "3 2 N", "LFFF"])).toBe(false);
            });

            it("shall return false for out of bound y starting position", () => {
                expect(inputFileService.checkInputFile(["2 7", "2 8 N", "LFFF"])).toBe(false);
            });

            it("shall return false for unknown starting direction", () => {
                expect(inputFileService.checkInputFile(["2 7", "2 8 X", "LFFF"])).toBe(false);
            });

            describe("Moves", () => {
                it("shall return false for an invalid move instruction", () => {
                    expect(inputFileService.checkInputFile(["2 7", "2 5 N", "LFFXF"])).toBe(false);
                });
            });
        });
    });
});