const displayBlock = document.querySelector('.details');

let valToCalc = 0;
let currentOperator = '';
let calculatedValue = undefined;
let showingCalculated = false;

clickEvent = (numValue) =>{

    if(showingCalculated == true){
        displayBlock.innerHTML = '';
        calculatedValue = undefined;
        showingCalculated = false;
    }

    if (typeof(numValue) == 'number'){
        displayBlock.innerHTML += numValue
    }else{
        console.log(typeof(numValue) + numValue);
    }
}

calcEvent = (assignment) => {

    if(assignment === '='){
        valToCalc = displayBlock.innerHTML;
        realCalculator();
        displayBlock.innerHTML = calculatedValue;
        showingCalculated = true;
    }else{
        valToCalc = displayBlock.innerHTML;
        realCalculator();
        currentOperator = assignment;

        displayBlock.innerHTML = '';
    }
}

realCalculator = () => {

    if (showingCalculated == true) {
        showingCalculated = false;
        return
    }else{
    calculatedValue = (calculatedValue == undefined)? eval(valToCalc): eval(String(calculatedValue) + currentOperator + valToCalc);
    displayBlock.innerHTML = '';
    console.log(calculatedValue);}
}