
 function calculadora (operador, valor1, valor2){
             
  if(operador === "suma"){
    return parseInt(valor1) + parseInt(valor2); //es un string y en javascript el signo + se usa para sumar(en el caso de numeros) y también se usa para concatenar
  }
  if(operador === "resta"){
   return valor1 - valor2;
  }
  if(operador === "dividir"){
    return valor1 / valor2;
  }
}

function calcular(){

var num1 = document.getElementById('n1').value;
var num2 = document.getElementById('n2').value;
var op1 = document.getElementById('op').value;

if(num2 === "0" && op1 === "dividir"){
document.getElementById('n1').value = "";
document.getElementById('n2').value = "";
  alert("El denominador no puede ser cero");
}
var result= calculadora(op1, num1, num2);
document.getElementById('result').value = result;
}