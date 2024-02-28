const displayBlock = document.querySelector('.details');


let valToCalc = 0;
let currentOperator = '';
let calculatedValue = undefined;
let showingCalculated = false;


modifyDisplay = () =>{
    valToCalc = String(valToCalc);
    valToCalc = valToCalc.replace("x10","e");
}
clickEvent = (numValue) =>{


    if(showingCalculated == true){
        displayBlock.innerHTML = '';
        calculatedValue = undefined;
        showingCalculated = false;
    }


    if (typeof(numValue) == 'number' || numValue == "." || numValue == "x10"){
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
    }else if(assignment === 'C'){
        displayBlock.innerHTML='';
        calculatedValue = undefined;
    }else if(assignment === 'D'){
        let displayArr = displayBlock.innerHTML.split('')
        displayArr[displayArr.length - 1] = '';
        displayBlock.innerHTML = displayArr.join('');
    }else{
        valToCalc = displayBlock.innerHTML;
        realCalculator();
        currentOperator = assignment;
        displayBlock.innerHTML = '';
    }
}


realCalculator = () => {


    modifyDisplay();
    if (showingCalculated == true) {
        showingCalculated = false;
        return
    }else{
    calculatedValue = ((calculatedValue == undefined)? eval(valToCalc): eval(String(calculatedValue) + currentOperator + valToCalc)).toFixed(2);
    displayBlock.innerHTML = '';
    console.log(calculatedValue);}
}
