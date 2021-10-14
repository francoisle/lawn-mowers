const Engine = require("./Engine");

/**
 * Integration tests can be done here as it is the best place to test full scenario.
 */
describe("Engine", () => {
    it("shall validate the exercice case", () => {
        const input = [
            "5 5",
            "1 2 N",
            "LFLFLFLFF",
            "3 3 E",
            "FFRFFRFRRF"
        ];

        const scenario = new Engine(input);
        scenario.execute();

        const output = scenario.getPositions();

        // First lawn mower
        expect(output[0].x).toBe(1);
        expect(output[0].y).toBe(3);
        expect(output[0].d).toBe("N");

        // Second lawn mower
        expect(output[1].x).toBe(5);
        expect(output[1].y).toBe(1);
        expect(output[1].d).toBe("E");
    });
});
