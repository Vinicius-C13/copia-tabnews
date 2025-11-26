function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "erro";
  }
  return a + b;
}

exports.somar = somar;
