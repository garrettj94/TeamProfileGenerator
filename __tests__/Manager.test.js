const Manager = require("../lib/manager");


describe("manager", () => {
    describe("position", () => {
        it("will show the managers name", () => {
            const obj = new manager();

            expect("manager" in obj).toEqual(true);
        });

        it("should set 'Position' when created", () => {
            const Position = ('');

            const obj = new Position(Manager);

            expect(obj.Position).toEqual(Manager);
        });
    });
});
