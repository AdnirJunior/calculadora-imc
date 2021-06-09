let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC(){
  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value / 100;
  let resultado = document.getElementById('resultado');
  if(peso !== '' && altura !== ''){
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = '';
    if(imc < 18.5){
      mensagem = "Você está abaixo do peso!"     
   } else if( imc < 25){
     mensagem = 'Você está com o peso ideal!'
   } else if(imc < 30) {
     mensagem = 'Você esta levemente acima do peso!'
   } else if(imc < 35) {
     mensagem = 'Obesidade grau 1!'
   } else if (imc < 40) {
     mensagem = 'Cuidado: Obesidade grau 2'
   } else {
     mensagem = 'Cuidade: Obesidade grau 3'
   }
  resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;
  }else{
    resultado.textContent = `Você precisa preencher todos os campos`;
  }
  
}


botaoCalcular.addEventListener('click', calculandoIMC);