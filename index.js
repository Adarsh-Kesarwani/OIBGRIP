let temp=document.getElementById('inputTemp');
function checkedCel(){
    let cel=document.getElementById('inputTemp').value;
    document.getElementById('convertedTemp').value=((cel-32)/1.8 + " Celcius");
}

function checkedFar(){
    let far=document.getElementById('inputTemp').value;
    document.getElementById('convertedTemp').value=(far*1.8)+32 + " Farenheight";
}

function clearForm(){
    document.getElementById('inputTemp').value='';
    document.getElementById('convertedTemp').value='';
}