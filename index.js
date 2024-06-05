const dsp = document.getElementById("dsp");

function appendToDisplay(input){
    dsp.value += input;
}

function clearDisplay(input){
    dsp.value = "";
}

function calculate(input){
    dsp.value = eval(dsp.value);
}









/* BRAIN STORMING:
b1 = 1(string format);
b5 = 5(string format);
+ concaternation = 5 + 1 = 51;
+ type() turning into int format;
51 = int;
if any sign is pressed, then turn string into int;
51 = string --> + pressed --> 51 = int


if n1 + n2 = something, then n1 + n2 = ans, 
if + other number then ans + n2 = ans(= output), 
*/
