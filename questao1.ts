function isFibonacci(num: number): boolean {
  let a = 0,
    b = 1;
  if (num === 0 || num === 1) return true;

  while (b < num) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b === num;
}

const numero = 13;
const pertence = isFibonacci(numero);
console.log(
  `O número ${numero} ${
    pertence ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`
);
