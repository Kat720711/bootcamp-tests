describe('Test countAllFromTown function', function() {
    it("should return 3 for registrations from 'CL' in 'CL 124,CY 567,CL 345, CJ 456,CL 341'", function() {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        chai.assert.equal(fromStellies, 3);
    });

    it("should return 1 for registrations from 'CF' in 'CJ 124,CY 567,CL 345, CF 456, CL 341'", function() {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        chai.assert.equal(fromKuilsriver, 1);
    });
});