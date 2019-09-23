//EJERCICIO 1 --> Verificar si la palabra contiene las letras 'ing'
var wordIncludes = 'baloon';

if (wordIncludes .includes ( 'ing' )){
  console.log ('La palabra contiene las letras "ing"');
} else {
    console.log ('La palabra no contiene las letras "ing"');
}
//EJERCICIO 2 --> var 0 al 100 identificar los #pares e imprimirlos en pantalla
var number = 0;

while (number <= 100 ){
  if (number %2 === 0 ){
    console.log (number);
  }
  number ++
}

//EJERCICIO 3 --> array de mascotas. Imprimir uno por uno los elementos del array

var pets = ['dog','cat','horse','pig']

for (let petIndex = 0; petIndex < pets.length; petIndex ++){
  console.log (pets [petIndex]);
}

//EJERCICIO 4 --> Verificar que la palabra {word} tiene al menos 3 vocales
var vowels = ['a','e','i','o','u','A','E','I','O','U']
var word = 'murcielago'
var vowelCounter = 0

for (let wordCheck = 0; wordCheck < word.length; wordCheck ++ ){
  if (vowels.includes (word [wordCheck])){
    vowelCounter ++
  } if (vowelCounter >= 3){
    console.log ('La palabra tiene más de 3 vocales');
  } 
}

/* EJERCICIO 5 --> Cuantos mùltiplos de 8 hay dentro del rango {numberOne} {numberTwo}
    --Se debe validar que {numberOne} sea menor que {numberTwo}
    --Verificar que ambos son positivos*/

var numberOne = 1
var numberTwo = 100
var rangeOfNumbers = numberTwo - numberOne

for (let range = 0; range <= numberTwo; range ++){
  if (range % 8 === 0){
    console.log (range)
  }
}
//EXTRAS LISTOS
if ( numberOne < numberTwo){
  console.log ('El {numberOne} es menor que el {numberTwo}');
} 
if ( numberOne && numberTwo >= 0){
  console.log ('Los números son positivos')
}
