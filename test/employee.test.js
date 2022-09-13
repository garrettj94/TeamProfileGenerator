const employee = require("./lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("will show the employees name", () => {
      const obj = new employee();

      expect("employee" in obj).toEqual(true);
    });

    it("should set 'Postion' when created", () => {
      const Postion = manager;

      const obj = new Postion(manager);

      expect(obj.Postion).toEqual(manager);
    });

  //   it("should default 'number' to 0", () => {
  //     const obj = new Arithmetic();

  //     expect(obj.number).toEqual(0);
  //   });
  // });

//   describe("plus", () => {
//     it("should return a new 'Arithmetic' object", () => {
//       const obj = new Arithmetic(3).plus(3);

//       expect(obj instanceof Arithmetic).toEqual(true);
//     });

//     it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
//       const num = 8;
//       const added = 7;
//       const sum = num + added;

//       const { number } = new Arithmetic(num).plus(added);

//       expect(number).toEqual(sum);
//     });
//   });

//   describe("minus", () => {
//     it("should return a new 'Arithmetic' object", () => {
//       const obj = new Arithmetic(9).minus(4);

//       expect(obj instanceof Arithmetic).toEqual(true);
//     });

//     it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
//       const num = 10;
//       const subtracted = 17;
//       const difference = num - subtracted;

//       const { number } = new Arithmetic(num).minus(subtracted);

//       expect(number).toEqual(difference);
//     });
//   });

//   describe("value", () => {
//     it("should return the 'Arithmetic' object's 'number' value", () => {
//       const num = 10;
//       const obj = new Arithmetic(num);

//       const result = obj.value();

//       expect(result).toEqual(num);
//     });
  });
});
