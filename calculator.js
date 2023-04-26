//clear screen function

function clearScreen(){
    document.getElementById('result').value='';
}

//value display

function display(value){
    document.getElementById('result').value+=value;
}

//evaluate function

// This function evaluates the expression and returns result
function calculate() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
    }