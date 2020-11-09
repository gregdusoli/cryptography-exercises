function EncryptString(rawString) {
  const sequence = [
    'a',
    'c',
    'd',
    'f',
    'g',
    'i',
    'j',
    'l',
    'o',
    'p',
    'r',
    't',
    'u',
    'v',
    'x',
  ];

  const splittedString = rawString.split('');

  const encryptedString = splittedString.map((character) => {
    return sequence.indexOf(character) > -1
      ? sequence.indexOf(character)
      : character;
  });

  console.log(encryptedString);
}

/**
 * NOTICE: Javascript doens't provides native support to multidiomensional arrays
 */
function ValidateMagicSquare(arr1, arr2, arr3) {
  const messages = {
    alert: 'A matriz informada não é um Quadrado Mágico :/',
    sucess: 'Parabéns! A matriz informada é um Quadrado Mágico!',
    error:
      'Ops, informe como parâmetros de entrada 3 listas contendo 3 dígitos numéricos em cada',
  };

  if (
    !arr1 ||
    !arr2 ||
    !arr3 ||
    arr1.length < 3 ||
    arr2.length < 3 ||
    arr3.length < 3
  ) {
    return console.error(messages.error);
  }

  const matrix = [[...arr1], [...arr2], [...arr3]];

  const reducer = (acc, cur) => acc + cur;
  const diag1 = () => matrix[0][0] + matrix[1][1] + matrix[2][2];
  const diag2 = () => matrix[2][0] + matrix[1][1] + matrix[0][2];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].reduce(reducer);
    if (row !== 15) return console.error(messages.alert);
  }

  for (let i = 0; i < matrix.length; i++) {
    const column = matrix[i].reduce(reducer);
    if (column !== 15) return console.error(messages.alert);
  }

  for (let i = 0; i < matrix.length - 1; i++) {
    const diagonal =
      i === 0 ? matrix[i].reduce(diag1) : matrix[i].reduce(diag2);
    if (diagonal !== 15) return console.error(messages.alert);
  }

  console.log(messages.sucess);
}

/**
 * NOTICE: Implementation NOT completed
 */
function FindEncryptedWord() {
  const HASH = 7;
  const FACTOR = 37;
  const LETTERS = 'acdegilmnoprstuw';
  const LOOKED_HASH = 695527946727;

  let hasFoundHash = false;
  let currentAnagram = '';
  let generatedAnagrams = [];

  const generateAnagram = (length) => {
    var anagram = '';
    for (var i = 0; i < length; i++) {
      anagram += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
    }

    if (generatedAnagrams.includes(anagram)) {
      generateAnagram(HASH);
    }

    return anagram;
  };

  const getHash = (payload) => {
    console.log(payload);

    let h = HASH;
    let payloadLength = payload.length;

    for (i = 0; i < payloadLength; i++) {
      h = h * FACTOR + LETTERS.indexOf(payload.charAt(i));
    }

    return h;
  };

  do {
    currentAnagram = generateAnagram(HASH);
    let hash = getHash(currentAnagram);

    if (hash === LOOKED_HASH) {
      hasFoundHash = true;
      break;
    }

    generatedAnagrams.push(currentAnagram);
  } while (!hasFoundHash);

  console.log('WORD_FOUND', currentAnagram);
}

// EncryptString('Luiza');
// ValidateMagicSquare([4, 9, 2], [3, 5, 7], [8, 1, 6]);
// FindEncryptedWord();
