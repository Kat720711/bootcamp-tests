describe('Test fromWhere function', function() {
    it("should return 'Bellville' for 'CY 567489'", function() {
        chai.assert.equal(fromWhere('CY 567489'), 'Bellville');
    });

    it("should return 'Paarl' for 'CJ 343502'", function() {
        chai.assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it("should return 'Cape Town' for 'CA 987504'", function() {
        chai.assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it("should return 'Some other place!' for 'ZN 568593'", function() {
        chai.assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});