let yearlyExpences = [
  1500, 100, 390, 80000, 1980, 90, 15010, 1400, 300, 290, 4000, 1250,
];

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function sum(yearlyExpences) {
  let sumOfYearlyExpences = 0;
  for (j = 0; j < yearlyExpences.length; j++) {
    if (yearlyExpences[j] > 1000) {
      sumOfYearlyExpences += yearlyExpences[j];
    }
  }
  return sumOfYearlyExpences;
}

console.log(sum(yearlyExpences));

testData = [40590, 148200, 25709];

testData.forEach((array, index) => {
  if (sum(expencesExamples[index].yearlyExpences) === array) {
    console.log(
      `Результат выполнения функции ${sum(
        expencesExamples[index].yearlyExpences
      )} для года с индексом ${index} равен расчетному ${array}.`
    );
  }
});

let Date = new Object();
yearlyExpences.forEach((value, index) => {
  if (value <= 1000) {
    Date[index] = value;
  }
  return Date;
});
console.log(Date);

function changeIndexToMonth(array) {
  if (array[0]) {
    array["январь"] = array[0];
    delete array[0];
  }
  if (array[1]) {
    array["февраль"] = array[1];
    delete array[1];
  }
  if (array[2]) {
    array["март"] = array[2];
    delete array[2];
  }
  if (array[3]) {
    array["апрель"] = array[3];
    delete array[3];
  }
  if (array[4]) {
    array["май"] = array[4];
    delete array[4];
  }
  if (array[5]) {
    array["июнь"] = array[5];
    delete array[5];
  }
  if (array[6]) {
    array["июль"] = array[6];
    delete array[6];
  }
  if (array[7]) {
    array["август"] = array[7];
    delete array[7];
  }
  if (array[8]) {
    array["сентябрь"] = array[8];
    delete array[8];
  }
  if (array[9]) {
    array["октябрь"] = array[9];
    delete array[9];
  }
  if (array[10]) {
    array["ноябрь"] = array[10];
    delete array[10];
  }
  if (array[11]) {
    array["декабрь"] = array[11];
    delete array[11];
  }
  return array;
}

console.log(changeIndexToMonth(Date));

// сначала расписала как отфильтровать месяца с затратами менее 1000 для expencesExamples,
// поняла, что намудрила, написала для обычного массива, но хочу оставить здесь, вдруг пригодиться

let Date1 = [];
for (let i = 0; i < expencesExamples.length; i++) {
  let yearlyExpences = new Object();
  for (let j = 0; j < expencesExamples[i].yearlyExpences.length; j++) {
    if (expencesExamples[i].yearlyExpences[j] <= 1000) {
      yearlyExpences[j] = expencesExamples[i].yearlyExpences[j];
    }
  }
  Date1.push(yearlyExpences);
}

Date1.forEach((value) => {
  if (value[0]) {
    value["январь"] = value[0];
    delete value[0];
  }
  if (value[1]) {
    value["февраль"] = value[1];
    delete value[1];
  }
  if (value[2]) {
    value["март"] = value[2];
    delete value[2];
  }
  if (value[3]) {
    value["апрель"] = value[3];
    delete value[3];
  }
  if (value[4]) {
    value["май"] = value[4];
    delete value[4];
  }
  if (value[5]) {
    value["июнь"] = value[5];
    delete value[5];
  }
  if (value[6]) {
    value["июль"] = value[6];
    delete value[6];
  }
  if (value[7]) {
    value["август"] = value[7];
    delete value[7];
  }
  if (value[8]) {
    value["сентябрь"] = value[8];
    delete value[8];
  }
  if (value[9]) {
    value["октябрь"] = value[9];
    delete value[9];
  }
  if (value[10]) {
    value["ноябрь"] = value[10];
    delete value[10];
  }
  if (value[11]) {
    value["декабрь"] = value[11];
    delete value[11];
  }
});

console.log(Date1);
