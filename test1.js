const sum = (a, b, c) => console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
sum(1, 2, 3); // 1 + 2 + 3 = 6
sum(4, 5, 6); // 4 + 5 + 6 = 15

const nom = (min, max) => {
  let result = 0;
  for (let i = min; i <= max; i++) {
    result = i + result;
  }
  console.log(result);
};

nom(50, 100);

const pow = (number, power) => {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result = number * result;
  }
  console.log(result);
};

pow(2, 3);

const multTable = () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};
multTable();
