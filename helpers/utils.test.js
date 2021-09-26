const utils = require("./utils");


describe('utils package', () => {
    describe('isOdd', () => {

        it('shall return false for an even number', () => {
            expect(utils.isOdd(4)).toBe(false);
        });

        it('shall return true for an odd number', () => {
            expect(utils.isOdd(5)).toBe(true);
        });
    });


    describe('removeLineBreaks', () => {
        it("shall remove line break from a string containing line break", () => {
            const input = "hello world\r";
            expect(utils.removeLineBreaks(input)).toBe("hello world");
        });
    });

    describe('isPositiveInt', () => {
        it("shall return false for letters", () => {
            expect(utils.isPositiveInt("d")).toBe(false);
        });

        it("shall return false for negative numbers", () => {
            expect(utils.isPositiveInt("d")).toBe(false);
        });

        it("shall return false for non finite numbers", () => {
            expect(utils.isPositiveInt(1 / 0)).toBe(false);
        });

        it("shall return false for 0", () => {
            expect(utils.isPositiveInt(0)).toBe(false);
        });

        it("shall return true for positive numbers", () => {
            expect(utils.isPositiveInt(7)).toBe(true);
        });
    });

    describe("isInLawn", () => {
        it("shall return false for letters", () => {
            expect(utils.isInLawn("d", 10)).toBe(false);
        });

        it("shall return false for negative numbers", () => {
            expect(utils.isInLawn("d", 10)).toBe(false);
        });

        it("shall return false for non finite numbers", () => {
            expect(utils.isInLawn(1 / 0, 10)).toBe(false);
        });

        it("shall return false for 0", () => {
            expect(utils.isInLawn(0, 10)).toBe(false);
        });

        it("shall return true for positive numbers", () => {
            expect(utils.isInLawn(7, 10)).toBe(true);
        });

        it("shall return false for positive numbers out of lawn", () => {
            expect(utils.isInLawn(17, 10)).toBe(false);
        });
    });
});
