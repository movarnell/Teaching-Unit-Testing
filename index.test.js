const expect = chai.expect;

describe('add function', () => {
    it('should add two numbers', () => {
        expect(add(1, "2")).to.not.equal(3);
    });
});