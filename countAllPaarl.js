function allPaarl(regNumbers) {
    var regNumbersArray = regNumbers.split(','); 
    var results = [];

    for (var i = 0; i < regNumbersArray.length; i++) {
        var regNumber = regNumbersArray[i].trim(); 
        if (regNumber.startsWith('CJ')) {
            results.push(regNumber); 
        }
    }

    return results;
}