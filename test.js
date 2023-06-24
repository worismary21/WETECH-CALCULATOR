// Import the functions
const { add, subtract, multiply, divide } = require('./index');

// Test cases for the add function
describe('add', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});

// Test cases for the subtract function
describe('subtract', () => {
  test('subtracts two numbers correctly', () => {
    expect(subtract(5, 5)).toBe(0);
  });
});

// Test cases for the multiply function
describe('multiply', () => {
  test('multiplies two numbers correctly', () => {
    expect(multiply(3, 5)).toBe(15);
  });
});

// Test cases for the divide function
describe('divide', () => {
  test('divides two numbers correctly', () => {
    expect(divide(20, 5)).toBe(4);
  });
});
