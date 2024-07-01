describe('Test countRegNumber function', function() {
    it("should return 3 for 'CA 182736,CY 523519,CJ 812328'", function() {
        chai.assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });

    it("should return 1 for 'CA 182736'", function() {
        chai.assert.equal(countRegNumber('CA 182736'), 1);
    });
});