
//TESTS FOR CLEAR GENERATEDNUMBERS FUNCTION
QUnit.test( "clearGeneratedNumbers_emptyarray", function( assert ) {
    controller.clearGeneratedNumbers();
    controller.createArray(100,1000,10000);
    controller.clearGeneratedNumbers();
    var numbersArray = controller.getGeneratedNumbersArray();
    assert.ok(numbersArray.length == 0,'pass');
});

// TESTS FOR EXISTONARRAY FUNCTION
QUnit.test( "existOnArray_existstrue", function( assert ) {
    var arrayTest = [2,43,45,324]
    var result = controller.existsOnArray(arrayTest,43);
    assert.ok(result,'pass');
});

QUnit.test( "existOnArray_existsfalse", function( assert ) {
    var arrayTest = [2,43,45,324]
    var result = controller.existsOnArray(arrayTest,25);
    assert.ok(result == false,'pass');
});

// TESTS FOR GENERATERANDOMNUMBER FUNCTION
QUnit.test( "generateRandomNumber_minValuecorrect", function( assert ) {
    controller.clearGeneratedNumbers();
    assert.ok(controller.generateRandomNumber(1000,10000) >=1000,'pass');
    assert.ok(controller.generateRandomNumber(10,10000) > 10,'pass');
    assert.ok(controller.generateRandomNumber(-10,10000) >-10,'pass');
    assert.ok(controller.generateRandomNumber(100,50) >50,'pass');
});


QUnit.test( "generateRandomNumber_maxValuecorrect", function( assert ) {
    controller.clearGeneratedNumbers();
    assert.ok(controller.generateRandomNumber(1000,10000) <10000,'pass');
    assert.ok(controller.generateRandomNumber(10,300) <300,'pass');
    assert.ok(controller.generateRandomNumber(-100,-10) <-10,'pass');
    assert.ok(controller.generateRandomNumber(100,50) <100,'pass');
});

// TESTS FOR CREATEARRAY FUNCTION
QUnit.test( "createArray_correctamount", function( assert ) {
    controller.clearGeneratedNumbers();
    var numbersArray = controller.createArray(100,1000,10000);
    assert.ok(numbersArray.length ==100);
});

QUnit.test( "createArray_uniquenumbers", function( assert ) {
    controller.clearGeneratedNumbers();
    var numbersArray = controller.createArray(100,1000,10000);
    var unique = true;
    for(var i = 0; i<numbersArray.length ;i++){
        var num = numbersArray.find(
            function(n){
                n == numbersArray[i] && numbersArray.indexOf(n) != i
            }
        );
        if(num !== undefined){
            unique = false;
            break;
        }     
    }
    assert.ok(unique,'pass');
});
