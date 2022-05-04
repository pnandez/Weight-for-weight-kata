export function orderWeight(weightsInNumbers: string): string {
  const numbers = weightsInNumbers.match(/\d+/g)?.map((str) => String(str)) || [];
  console.log(numbers);
  const orderedNumbersByWeights = numbers?.sort((a, b) => {
    if (calculateWeight(a) > calculateWeight(b)) return 1;
    if (calculateWeight(a) < calculateWeight(b)) return -1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })!;
  return orderedNumbersByWeights.join(" ");
}

function calculateWeight(numberValue: string) {
  const digits = numberValue.split("");
  let sum = 0;
  digits.forEach((digit) => {
    sum += parseInt(digit, 10);
  });
  return sum;
}

