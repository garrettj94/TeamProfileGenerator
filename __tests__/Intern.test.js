const Intern = require("./lib/intern");

describe("Intern", () => {
    describe("postion", () => {
        it("will show the employees name", () => {
            const obj = new employee();

            expect("employee" in obj).toEqual(true);
        });

        it("should set 'Postion' when created", () => {
            const Postion = ('');

            const obj = new Postion(Intern);

            expect(obj.Postion).toEqual(Intern);
        });
    });
});
