// helpers.js

export function padPrice(input) {
  const [dollars, cents = "00"] = String(input).split(".");
  return `${dollars}.${cents.padEnd(2, "0")}`;
}
