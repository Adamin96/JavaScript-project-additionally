let num = 266219;
let result = 1;
let toString = num.toString(); 
let array = toString.split(""); 

for (let i = 0; i < array.length; i++) {
  result *= array[i];
  console.log(result / array[i], "*", array[i], "=", result);
}
console.log("Произведение цифр числа Num =", result);

let exp = result ** 3;
console.log("Результат возведения в степень =", exp);

console.log(exp.toString().substring(0, 2));