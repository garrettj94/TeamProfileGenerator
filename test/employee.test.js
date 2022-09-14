const employee = require("./lib/employee");

describe("Employee", () => {
  describe("manager", () => {
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
