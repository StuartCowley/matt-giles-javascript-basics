function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
  return !(a===b);
};

function truthiness(a) {
  if (a) {
    return true;
  }
  else {
    return false;
  }
};

function isEqual(a, b) {
  return a===b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return a % 2 === 1;
};

function isEven(a) {
  return 1+a % 2 === 1;
};

function isSquare(a) {
  return Math.sqrt(a) % 1 === 0 && a >= 0;
};

function startsWith(char, string) {
  return char === string.slice(0, 1);
};

function containsVowels(string) {
  let vowelsCount = 0
  const str = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)){
      vowelsCount++;
    };
  };
  return vowelsCount > 0;
}

function isLowerCase(string) {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
