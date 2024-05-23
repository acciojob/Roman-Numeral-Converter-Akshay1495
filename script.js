function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let roman = '';
  const keys = Object.keys(obj).map(Number).sort((a, b) => b - a);

  for (let i = 0; i < keys.length; i++) {
    let [letter, value] = obj[keys[i]];
    while (num >= value) {
      roman += letter;
      num -= value;
    }

    if (i % 2 === 0 && i < keys.length - 1) {
      let [nextLetter, nextValue] = obj[keys[i + 2]];
      if (num >= value - nextValue) {
        roman += nextLetter + letter;
        num -= (value - nextValue);
      }
    } else if (i % 2 !== 0 && i < keys.length - 2) {
      let [nextLetter, nextValue] = obj[keys[i + 2]];
      if (num >= value - nextValue) {
        roman += nextLetter + letter;
        num -= (value - nextValue);
      }
    }
  }

  return roman;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
