const intern = require("./lib/intern");

describe("intern", () => {
    describe("postion", () => {
        it("will show the employees name", () => {
            const obj = new employee();

            expect("employee" in obj).toEqual(true);
        });

        it("should set 'Postion' when created", () => {
            const Postion = manager;

            const obj = new Postion(manager);

            expect(obj.Postion).toEqual(manager);
        });
    });
});
