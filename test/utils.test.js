import { calculate } from "../js/utils"

describe("Unit test calculate", () => {
  it("Suma dos numeros correctament", () => {
    expect(calculate(1, 2, '+')).toBe(3);
  });
});

describe("Unit test calculate", () => {
  it("Resta dos numeros correctament", () => {
    expect(calculate(5, 2, '-')).toBe(3);
  });
});

describe("Unit test calculate", () => {
  it("Multiplica dos numeros correctament", () => {
    expect(calculate(3, 2, '*')).toBe(6);
  });
});

describe("Unit test calculate", () => {
  it("Divideix dos numeros correctament", () => {
    expect(calculate(10, 2, '/')).toBe(5);
  });
});

describe("Unit test calculate", () => {
  it("Dona infinity", () => {
    expect(calculate(10, 0, '/')).toBe(Infinity);
  });
});

describe("Unit test calculate", () => {
  it("NaN", () => {
    expect(calculate(0, 0, '/')).toBe(NaN);
  });
});


describe("Unit test calculate", () => {
  it("Undefined", () => {
    expect(calculate(6, 2, '=')).toBe(undefined);
  });
});

