function numberIsFibonacciSequence(number) {
  let previusNumber = 0;
  let currentNumber = 1;

  while (previusNumber <= number) {
    if (previusNumber === number) {
      console.log(number + " pertence à sequência de Fibonacci.");
      return true;
    }

    let temp = previusNumber + currentNumber;
    previusNumber = currentNumber;
    currentNumber = temp;
  }

  console.log(number + " não pertence à sequência de Fibonacci.");
  return;
}

numberIsFibonacciSequence(3);
