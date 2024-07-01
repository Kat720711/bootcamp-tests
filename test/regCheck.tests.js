describe('Test regCheck function', function() {
    it("should return true for registration number 'DC 55 YU GP' and location code 'GP'", function() {
        chai.assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it("should return false for registration number 'DC 55 YU GP' and location code 'EC'", function() {
        chai.assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it("should return true for registration number '5566 L' and location code 'L'", function() {
        chai.assert.equal(regCheck('5566 L', 'L'), true);
    });

    it("should return false for registration number '5566 L' and location code 'M'", function() {
        chai.assert.equal(regCheck('5566 L', 'M'), false);
    });

    it("should return true for registration number 'ERT 123 EC' and location code 'EC'", function() {
        chai.assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it("should return false for registration number 'ERT 123 EC' and location code 'GP'", function() {
        chai.assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it("should return true for registration number 'FGT 123 MP' and location code 'MP'", function() {
        chai.assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it("should return false for registration number 'FGT 123 MM' and location code 'MP'", function() {
        chai.assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});