function calculadora (numero1, numero2, opção){ 
    let resultado   
    let calculadora0= Number (numero1)
    let calculadora1= Number (numero2)
  
     switch (opção){
      case "+":
          let soma = calculadora0 + calculadora1
          break
      case "/" :
          let divisão = calculadora0 / calculadora1
          break
      case "*" :
          let multiplicação = calculadora0 * calculadora1
          break
      case"-":
          let subtração  = calculadora0 - calculadora1
          break
      case "E":
          let contador = 1;
          resultado = num1 * num1;
          while (contador < num2 - 1) {
              resultado = resultado * num1;
              contador++;
          }
              break
  
      if (resultado == undefined || resultado > 1000000) 
          resultado= 'Erro'
          {
          
      }
     }
     
  }
  