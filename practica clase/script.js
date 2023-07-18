// 1. Encontrar el número más grande en un arreglo, 
function encontrarNumeroMasGrande() {
  let numeros = [];
  let numero;

  do {
      numero = prompt('Ingrese un número (ingrese "fin" para terminar):');
      if (numero !== 'fin') {
          numeros.push(Number(numero));
      }
  } while (numero !== 'fin');

  let maximo = Math.max(...numeros);
  alert('El número más grande ingresado es: ' + maximo);
}

// 2. Validar si una palabra es un palíndromo
function validarPalindromo() {
  let palabra = prompt('Ingrese una palabra:');
  let palabraInvertida = palabra.toLowerCase().split('').reverse().join('');

  if (palabra.toLowerCase() === palabraInvertida) {
      alert('La palabra/frase ingresada es un palíndromo.');
  } else {
      alert('La palabra/frase ingresada no es un palíndromo.');
  }
}

// 3. Calcular la suma de los dígitos de un número (mas de un numero)
function calcularSumaDigitos() {
  let numero = prompt('Ingrese un número:');
  let suma = 0;

  for (let i = 0; i < numero.length; i++) {
      suma += Number(numero[i]);
  }

  alert('La suma de los dígitos del número ingresado es: ' + suma);
}

// 4. Generar un número aleatorio dentro de un rango
function generarNumeroAleatorio() {
  let rangoInicio = prompt('Ingrese el valor inicial del rango:');
  let rangoFin = prompt('Ingrese el valor final del rango:');

  let numeroAleatorio = Math.floor(Math.random() * (Number(rangoFin) - Number(rangoInicio) + 1)) + Number(rangoInicio);
  alert('El número aleatorio dentro del rango es: ' + numeroAleatorio);
}

// 5. Generar la secuencia de Fibonacci hasta un número dado
function generarSecuenciaFibonacci() {
  let numeroLimite = prompt('Ingrese un número para generar la secuencia de Fibonacci:');
  let secuencia = '0, 1';
  let num1 = 0;
  let num2 = 1;
  let suma;

  while (num1 + num2 <= Number(numeroLimite)) {
      suma = num1 + num2;
      secuencia += ', ' + suma;
      num1 = num2;
      num2 = suma;
  }

  alert('La secuencia de Fibonacci hasta el número es: ' + secuencia);
}
