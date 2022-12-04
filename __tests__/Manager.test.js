const Manager = require("../lib/manager");


describe("manager", () => {
    describe("postion", () => {
        it("will show the employees name", () => {
            const obj = new employee();

            expect("employee" in obj).toEqual(true);
        });

        it("should set 'Postion' when created", () => {
            const Postion = ('');

            const obj = new Postion(Manager);

            expect(obj.Postion).toEqual(Manager);
        });
    });
});
