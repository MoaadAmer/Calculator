
let expression = '';

function press(char) {

    expression += char;
    console.log(expression);
    document.getElementById('userInput').value = expression;
}

function erase() {
    expression = '';
    document.getElementById('userInput').value = '';
}

function equal() {
    if (expression != '')
        document.getElementById('userInput').value = eval(expression);
    expression = '';

}






