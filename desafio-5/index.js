// Sem Swap

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const originalString = "teste!";
const inverseSTring = reverseString(originalString);
console.log(inverseSTring);

// Com Swap

function reverseString(str) {
  let characters = str.split("");
  let firstIndex = 0;
  let lastIndex = characters.length - 1;

  while (firstIndex < lastIndex) {
    let temp = characters[firstIndex];
    characters[firstIndex] = characters[lastIndex];
    characters[lastIndex] = temp;

    firstIndex++;
    lastIndex--;
  }

  return characters.join("");
}

const stringOriginal = "teste!";
const stringInvertida = reverseString(stringOriginal);
console.log(stringInvertida);
