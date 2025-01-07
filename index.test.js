const expect = chai.expect;

describe('add function', () => {
    it('should add two numbers', () => {
        expect(add(1, "2")).to.not.equal(3);
    });
});

describe('subtract function', () => {
    it('should subtract two numbers', () => {
        expect(subtract(1, 2)).to.equal(-1);
    });
});

describe('multiply function', () => {
    it('should multiply two numbers', () => {
        expect(multiply(1, 2)).to.equal(2);
    });
});

describe('divide function', () => {
    it('should divide two numbers', () => {
        expect(divide(1, 2)).to.equal(0.5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(1, 0)).to.throw("Cannot divide by zero");
    });
});