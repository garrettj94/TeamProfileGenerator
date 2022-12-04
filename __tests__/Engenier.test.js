const Engenier = require("./lib/engenier");

describe("Employee", () => {
  describe("Engenier", () => {
    it("will show the employees name", () => {
      const obj = new employee();

      expect("employee" in obj).toEqual(true);
    });

    it("should set 'Postion' when created", () => {
      const Postion = ('');

      const obj = new Postion(Engenier);

      expect(obj.Postion).toEqual(Engenier);
    });
  });
});
