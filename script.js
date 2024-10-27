const input = document.getElementById("tbuser");
const button = document.getElementById("btn1");
const output = document.getElementById("output");

function transmit (){
 output.innerHTML = input.value
}

button.addEventListener('click', transmit)
  
