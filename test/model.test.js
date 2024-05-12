import Calculadora from "../js/model";

describe("Integration Tests", () => {
  test('Suma 5 + 2', () => {
    const testos = new Calculadora();
    testos.set(5);
    testos.operator = '+';
    testos.set(2);
    expect(testos.operate()).toBe(7);
  });

  test('Resta 5 - 2', () => {
    const testos = new Calculadora();
    testos.set(5);
    testos.operator = '-';
    testos.set(2);
    expect(testos.operate()).toBe(3);
  });

  test('Multiplica 5 * 2', () => {
    const testos = new Calculadora();
    testos.set(5);
    testos.operator = '*';
    testos.set(2);
    expect(testos.operate()).toBe(10);
  });

  test('Divideix 10 / 2', () => {
    const testos = new Calculadora();
    testos.set(10);
    testos.operator = '/';
    testos.set(2);
    expect(testos.operate()).toBe(5);
  });
});

describe("integration  Test claculate", () => {
  test("test clear ", () => {
    const testos = new Calculadora();
    testos.clear();
    expect(testos.operate()).toBe("Error");
  });
});

describe("integration  Test claculate", () => {
  test("To String ", () => {
    const testos = new Calculadora();
    testos.set(0);
    expect(testos.operate()).toBe("0");
  });
});

describe("integration Test calculate", () => {
  test("To String", () => {
    const testos = new Calculadora();
    testos.value1 = 2;
    testos.value2 = 4;
    expect(testos.operate()).toBe(undefined);
  });
});

describe("Integration Test adding decimal point", () => {
  test("Adding decimal point when operator is undefined", () => {
    const testos = new Calculadora();

    expect(testos.set_point()).toBe('0.');

    testos.set('5');
    testos.set_point();
    expect(testos.set_point()).toBe('0.5');

    testos.clear();
    testos.set('10');
    expect(testos.set_point()).toBe('10.');
  });

  test("Adding decimal point when operator is defined", () => {
    const testos = new Calculadora();

    testos.operator = '+';
    expect(testos.set_point()).toBe('0.');

    testos.set('5');
    testos.set_point();
    expect(testos.set_point()).toBe('0.5');

    testos.clear();
    testos.operator = '-';
    testos.set('10');
    expect(testos.set_point()).toBe('10.');
  });
});