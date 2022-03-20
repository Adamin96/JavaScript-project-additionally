"use strict";

// Задание №1
let lang = prompt("Английский или русский?" , "en или ru");
const newArr = [
  [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ],
  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
];

//вывод через if
if (lang === "ru") {
  console.log(newArr[0].join());
} else if (lang === "en") {
  console.log(newArr[1].join());
} else {
  console.log(
    "Вы не ввели ни одно из предложенных значений! Попробуйте заново"
  );
}

//вывод через оператор switch
switch (true) {
  case lang === "ru":
    console.log(newArr[0].join());
    break;
  case lang === "en":
    console.log(newArr[1].join());
    break;
  default:
    console.log(
      "Вы не ввели ни одно из предложенных значений! Попробуйте заново"
    );
    break;
}

//вывод через тернарный оператор
lang === "ru"
  ? console.log(newArr[0].join())
  : lang === "en"
  ? console.log(newArr[1].join())
  : console.log(
      "Вы не ввели ни одно из предложенных значений! Попробуйте заново"
    );

//Задание №2
let namePerson = prompt(
  "Введите предложенное или свой вариант",
  "Артем, Александр, свой вариант"
);
namePerson === "Артем"
  ? console.log("Директор")
  : namePerson === "Александр"
  ? console.log("Преподаватель")
  : console.log("Студент");
