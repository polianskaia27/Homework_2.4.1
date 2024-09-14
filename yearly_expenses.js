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

function sum(array) {
  let sumOfYearlyExpences = 0;
  for (j = 0; j < array.length; j++) {
    if (array[j] > 1000) {
      sumOfYearlyExpences += array[j];
    }
  }
  return sumOfYearlyExpences;
}

testData = [40590, 148200, 25709];

testData.forEach((value, index) => {
  if (sum(expencesExamples[index].yearlyExpences) === value) {
    console.log(
      `Результат выполнения функции ${sum(
        expencesExamples[index].yearlyExpences
      )} для года с индексом ${index} равен расчетному ${value}.`
    );
  }
});



