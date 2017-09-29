
//UI Controller: manages the HTML
var UIController = (function(){
    
    var DOMstrings = {
        tableBody: 'tableBody'
    }

    return {
       
        addTableRow: function(index,text){

            // Create HTML
            var html, element;
            
                html = '<tr><td>' + index + '</td><td>' + text + '</td></tr>'
            
            // Insert html into the DOM
            document.getElementById(DOMstrings.tableBody).insertAdjacentHTML('beforeend',html);
        },

        clearTableBody:function() {
            var element = document.getElementById(DOMstrings.tableBody);
            while (element.hasChildNodes()) {
                element.removeChild(element.lastChild);
            }
        },

    }
})();

// Main Controller
var controller = (function(UICtrl){
    
    var generatedNumbers = [];

    return {
        // Function called from UI
        generate: function(num, min, max){
            this.clearData();
            if((max-min) <num) {
                alert('Cannot generate the amount of number desired');
                return;
            }
            
            this.generatedNumbers = this.createArray(num, min, max);
            this.fillTable(this.generatedNumbers);
        },
        
        // Create array with random numbers between min and max and returns it
        createArray: function(num, min, max){
            var numbersArray =[];
            for(var i =0; i< num;i++){
                var number = this.generateRandomNumber(min,max);
                while(this.existsOnArray(numbersArray,number)){
                    number = this.generateRandomNumber(min, max);
                }
                numbersArray.push(number);
            }
            return numbersArray;
        },

        // Generate a random number between min and max and returns it
        generateRandomNumber: function(min, max){
            var number = Math.floor(Math.random() * (max - min + 1)) + min;
            return number;
        },

        // Check if num exist in array and return true or false
        existsOnArray: function(array, num){
           for(var i=0; i<array.length; i++) {
                if (array[i] == num) return true;
            }
            return false; 
        },

        // Fill the html table
        fillTable: function(numbersArray){
           for(var i =0; i< numbersArray.length;i++){
                UICtrl.addTableRow(i, numbersArray[i]);
            } 
        },

        // Clear generatedNumbers array and html table
        clearData: function(){
            this.clearGeneratedNumbers();
            UICtrl.clearTableBody();
        },

        // Returns generatedNumbers
        getGeneratedNumbersArray: function(){
            return generatedNumbers;
        },

        // Remove all elements in generatedNumbers array
        clearGeneratedNumbers: function(){
            generatedNumbers = [];
        }
    }

})(UIController);
