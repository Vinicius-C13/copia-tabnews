const somar = require("../models/calculadora").somar;

test("soma", () => {
  expect(1 + 1).toBe(2);
});

test("soma 2 + 2 igual a 4", () => {
  expect(somar(2, 2)).toBe(4);
});

test("soma Nan com Number", () => {
  expect(somar(2, "banana")).toBe("erro");
});

test("soma Number com Nan", () => {
  expect(somar("banana", 2)).toBe("erro");
});
