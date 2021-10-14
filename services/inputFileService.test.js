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


    describe("checkInputData", () => {

        it("shall return true for a correct starting area (and a correct following)", () => {
            expect(inputFileService.checkInputData(["2 7", "1 2 N", "LFFF"])).toBe(true);
        });

        describe("argument check", () => {
            it("shall return false if input is null", () => {
                expect(inputFileService.checkInputData(null)).toBe(false);
            });

            it("shall return false if input is an empty array", () => {
                expect(inputFileService.checkInputData([])).toBe(false);
            });

            it("shall return false if input is not an array", () => {
                expect(inputFileService.checkInputData(35)).toBe(false);
            });

            it("shall return false if input size is even", () => {
                expect(inputFileService.checkInputData([1, 2])).toBe(false);
            });
        });

        describe("First line check", () => {
            it("shall return false if first line has not an int for maxX", () => {
                expect(inputFileService.checkInputData(["a 2"])).toBe(false);
            });

            it("shall return false if first line has not an int for maxY", () => {
                expect(inputFileService.checkInputData(["3 a"])).toBe(false);
            });

            it("shall return false if first line has a negative int for maxY", () => {
                expect(inputFileService.checkInputData(["3 -1"])).toBe(false);
            });

            it("shall return false if first line has a negative int for maxX", () => {
                expect(inputFileService.checkInputData(["-2 7"])).toBe(false);
            });

            it("shall return false if first line has not the number of expected data", () => {
                expect(inputFileService.checkInputData(["2 7 4"])).toBe(false);
            });
        });

        describe("Lawn mowers starting position", () => {
            it("shall return false for incorrect number of symbols in the 2nd line", () => {
                expect(inputFileService.checkInputData(["2 7", "2 8 N X", "LFFF"])).toBe(false);
            });

            it("shall return false for out of bound x starting position", () => {
                expect(inputFileService.checkInputData(["2 7", "3 2 N", "LFFF"])).toBe(false);
            });

            it("shall return false for out of bound y starting position", () => {
                expect(inputFileService.checkInputData(["2 7", "2 8 N", "LFFF"])).toBe(false);
            });

            it("shall return false for unknown starting direction", () => {
                expect(inputFileService.checkInputData(["2 7", "2 8 X", "LFFF"])).toBe(false);
            });

            describe("Moves", () => {
                it("shall return false for an invalid move instruction", () => {
                    expect(inputFileService.checkInputData(["2 7", "2 5 N", "LFFXF"])).toBe(false);
                });
            });
        });
    });
});