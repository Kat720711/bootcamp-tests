describe('Test greet function', function() {
    var testData = [
      { name: 'Crestian', expected: 'Hello, Crestian' },
    ];
  
    testData.forEach(function(data) {
      it(`should greet ${data.name}`, function() {
        assert.equal(greet(data.name), data.expected);
      });
    });
  });