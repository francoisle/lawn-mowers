const engineHelper = require("./engineHelper");

describe("engineHelper package", () => {
    describe("applyMove method", () => {
        it("shall throw an error for an invalid move", () => {
            expect(() => {
                engineHelper.applyMove(1, 2, "N", "X", 5, 5);
            }).toThrow();
        });

        it("shall change the direction for a R move", () => {
            const x0 = 0;
            const y0 = 0;
            const d0 = "N";

            const {newD} = engineHelper.applyMove(x0, y0, d0, "R", 5, 5);
            expect(newD).toBe("E");
        });

        it("shall preserve the position for a R move", () => {
            const x0 = 0;
            const y0 = 0;
            const d0 = "N";

            const {newX, newY} = engineHelper.applyMove(x0, y0, d0, "L", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0);
        });

        it("shall change the direction for a L move", () => {
            const x0 = 0;
            const y0 = 0;
            const d0 = "N";

            const {newD} = engineHelper.applyMove(x0, y0, d0, "L", 5, 5);
            expect(newD).toBe("W");
        });

        it("shall preserve the position for a L move", () => {
            const x0 = 0;
            const y0 = 0;
            const d0 = "N";

            const {newX, newY} = engineHelper.applyMove(x0, y0, d0, "L", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0);
        });

        it("shall update the position for F move and N direction when y < maxY", () => {
            const x0 = 0;
            const y0 = 4;
            const d0 = "N";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0 + 1);
            expect(newD).toBe(d0);
        });

        it("shall not update the position for F move and N direction when y = maxY", () => {
            const x0 = 0;
            const y0 = 5;
            const d0 = "N";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0);
            expect(newD).toBe(d0);
        });

        it("shall update the position for F move and S direction when y > 0", () => {
            const x0 = 0;
            const y0 = 1;
            const d0 = "S";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0 - 1);
            expect(newD).toBe(d0);
        });

        it("shall not update the position for F move and S direction when y = 0", () => {
            const x0 = 0;
            const y0 = 0;
            const d0 = "S";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0);
            expect(newD).toBe(d0);
        });

        it("shall update the position for F move and W direction when x > 0", () => {
            const x0 = 1;
            const y0 = 1;
            const d0 = "W";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0 - 1);
            expect(newY).toBe(y0);
            expect(newD).toBe(d0);
        });

        it("shall not update the position for F move and W direction when x = 0", () => {
            const x0 = 0;
            const y0 = 0;
            const d0 = "W";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0);
            expect(newD).toBe(d0);
        });

        it("shall update the position for F move and E direction when x < maxX", () => {
            const x0 = 3;
            const y0 = 1;
            const d0 = "E";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0 + 1);
            expect(newY).toBe(y0);
            expect(newD).toBe(d0);
        });

        it("shall not update the position for F move and E direction when x = maxX", () => {
            const x0 = 5;
            const y0 = 0;
            const d0 = "E";

            const {newX, newY, newD} = engineHelper.applyMove(x0, y0, d0, "F", 5, 5);
            expect(newX).toBe(x0);
            expect(newY).toBe(y0);
            expect(newD).toBe(d0);
        });
    });
});
