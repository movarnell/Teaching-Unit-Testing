const expect = chai.expect;

// Describe block for the 'add' function
describe('add function', () => {
    // Test case for adding two numbers
    it('should add two numbers', () => {
        // Expectation: adding 1 and "2" should not equal 3 (since "2" is a string)
        expect(add(1, "2")).to.not.equal(3);
    });
});

// Describe block for the 'subtract' function
describe('subtract function', () => {
    // Test case for subtracting two numbers
    it('should subtract two numbers', () => {
        // Expectation: subtracting 2 from 1 should equal -1
        expect(subtract(1, 2)).to.equal(-1);
    });
});

// Describe block for the 'multiply' function
describe('multiply function', () => {
    // Test case for multiplying two numbers
    it('should multiply two numbers', () => {
        // Expectation: multiplying 1 and 2 should equal 2
        expect(multiply(1, 2)).to.equal(2);
    });
});

// Describe block for the 'divide' function
describe('divide function', () => {
    // Test case for dividing two numbers
    it('should divide two numbers', () => {
        // Expectation: dividing 1 by 2 should equal 0.5
        expect(divide(1, 2)).to.equal(0.5);
    });

    // Test case for dividing by zero
    it('should throw an error when dividing by zero', () => {
        // Expectation: dividing 1 by 0 should throw an error with the message "Cannot divide by zero"
        expect(() => divide(1, 0)).to.throw("Cannot divide by zero");
    });
});