/*EJERCICIO 1 --> Se tiene una lista con el nombre de cada uno de los empleados con los días  que faltaron al trabajo ej [[David,1][Jose,8]]. Sueldo diario $450, días trabajados: 30, Descuento del 2% del salario acumulable.
¿Cuánto es el sueldo fial del empleado?*/

const DAILY_SALARY = 450
const MONTH_DAYS = 30
const DISCOUNT = .02
var employees = [['Marco', 1],['Mauricio',3],['Cris',2],['Arturo',0]]
const MONTHLY_SALARY = DAILY_SALARY * MONTH_DAYS

for (let absence = 0; absence <= employees.length; absence ++){
  let currentEmployee = employees [absence] // equivale a employees [0]
  let absentDays = currentEmployee[1] //array dentro de array equivale a [0][1]
  let totalDiscountPercent = absentDays * DISCOUNT // cantidad en $ descontada por los dias de faltas 
  let totalDiscount = MONTHLY_SALARY * (totalDiscountPercent / 100) // descuento total al mes
  let totalSalary = MONTHLY_SALARY - totalDiscount // total del salario de cada empleado

  console.log (`${currentEmployee[0]}: $${totalSalary}`);
}
/* EJERCICIO 2 --> Calculadora para dos números que resuelvan las operaciónes básicas:
  Suma, resta, multiplicación y división */
 
function addition (numberOne , numberTwo){
  return `${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`
  }
function subtraction (numberOne , numberTwo){
  return `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`
  }
function division (numberOne , numberTwo){
  return `${numberOne} - ${numberTwo} = ${numberOne / numberTwo}`
   }
function multiplication (numberOne , numberTwo){
  return `${numberOne} - ${numberTwo} = ${numberOne * numberTwo}`
   }