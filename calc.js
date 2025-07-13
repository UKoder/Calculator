let calculation =document.querySelector('input');

function dispnum(num){
    calculation.value+=num;
}

function clearCalc(){
    calculation.value="";
}

function calc(){
    try{
        let result = new Function("return " + calculation.value)();
        calculation.value=result;
    }
    catch(error){
        calculation.value="Error";
    }
}
function del(){
    calculation.value=calculation.value.slice(0,-1);
}