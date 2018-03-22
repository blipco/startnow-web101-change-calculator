// Write your JavaScript here


document.getElementById("calculate-change").addEventListener("click", 

function totalChange() {

    var amountDue = parseFloat(document.getElementById("amount-due").value);

    var amountReceived = parseFloat(document.getElementById("amount-received").value);

    var runningTotal = (amountReceived - amountDue) * 100;

if (runningTotal >= 2000){
    document.getElementById("twenty-output").innerHTML = parseInt(runningTotal / 2000);
    runningTotal %= 2000;
} else document.getElementById("twenty-output").innerHTML = 0;

if (runningTotal >= 1000){
    document.getElementById("ten-output").innerHTML = parseInt(runningTotal / 1000);
    runningTotal %= 1000;
} else document.getElementById("ten-output").innerHTML = 0;
    
if (runningTotal >= 500){
    document.getElementById("five-output").innerHTML = parseInt(runningTotal / 500);
    runningTotal %= 500;
} else document.getElementById("five-output").innerHTML = 0;

if (runningTotal >= 100){
    document.getElementById("one-output").innerHTML = parseInt(runningTotal / 100);
    runningTotal %= 100;
} else document.getElementById("one-output").innerHTML = 0;

if (runningTotal >= 25){
    document.getElementById("quarters-output").innerHTML = parseInt(runningTotal / 25);
    runningTotal %= 25;
} else document.getElementById("quarters-output").innerHTML = 0;

if (runningTotal >= 10){
    document.getElementById("dimes-output").innerHTML = parseInt(runningTotal / 10);
    runningTotal %= 10;
} else document.getElementById("dimes-output").innerHTML = 0;

if (runningTotal >= 5){
    document.getElementById("nickels-output").innerHTML = parseInt(runningTotal / 5);
    runningTotal %= 5;
} else document.getElementById("nickels-output").innerHTML = 0;

if (runningTotal >= 1){
    document.getElementById("pennies-output").innerHTML = parseInt(runningTotal / 1);
    runningTotal %= 1;
} else document.getElementById("pennies-output").innerHTML = 0;
});