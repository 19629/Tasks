function showDisplay(buttonValue){
    document.getElementById("screen").value += buttonValue;   
}

function clearDisplay(){
    document.getElementById("screen").value = "";
}

function equalsDisplay(){
    let result = eval(document.getElementById("screen").value);
    document.getElementById("screen").value = result; 
}