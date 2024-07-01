describe('Test isFromBellville function', function() {
    it("should return true for registration number 'CY 123'", function() {
        chai.assert.equal(isFromBellville('CY 123'), true);
    });

    it("should return false for registration number 'CJ 123'", function() {
        chai.assert.equal(isFromBellville('CJ 123'), false);
    });

    it("should return true for registration number 'CY 456'", function() {
        chai.assert.equal(isFromBellville('CY 456'), true);
    });

    it("should return false for registration number 'CA 123'", function() {
        chai.assert.equal(isFromBellville('CA 123'), false);
    });
});