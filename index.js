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

  return console.log(encryptedString);
}

/**
 * Notice to revisors: Javascript doens't provides native support to multidiomensional arrays
 */
function ValidateMagicSquare(arr1, arr2, arr3) {
  const messages = {
    alert: 'A matriz informada não é um Quadrado Mágico :/',
    sucess: 'Parabéns! A matriz informada é um Quadrado Mágico!',
    error:
      'Esta função espera 3 parâmetros do tipo array contendo 3 caracteres numéricos em cada um',
  };

  if (!arr1 || !arr2 || !arr3) {
    return console.error(messages.error);
  }

  const matrix = [[...arr1], [...arr2], [...arr3]];

  const reducer = (acc, cur) => acc + cur;
  const diag1 = () => matrix[0][0] + matrix[1][1] + matrix[2][2];
  const diag2 = () => matrix[2][0] + matrix[1][1] + matrix[0][2];

  // const rows = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].reduce(reducer);
    if (row !== 15) return console.error(messages.alert);
    // rows.push({ [`row${i}`]: row });
  }

  // const columns = [];
  for (let i = 0; i < matrix.length; i++) {
    const column = matrix[i].reduce(reducer);
    if (column !== 15) return console.error(messages.alert);
    // columns.push({ [`col${i}`]: column });
  }

  // const diagonals = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    const diagonal =
      i === 0 ? matrix[i].reduce(diag1) : matrix[i].reduce(diag2);
    if (diagonal !== 15) return console.error(messages.alert);
    // diagonals.push({ [`diag${i}`]: diagonal });
  }

  return console.log(messages.sucess);
}

function FindEncryptedWord(string, hash = null) {
  const HASH = 7;
  const FACTOR = 37;
  const LETTERS = 'acdegilmnoprstuw';

  const getHash = (string) => {
    let h = HASH;
    const Ilen = string.length;

    for (let i = 0; i < Ilen; i++) {
      h = h * FACTOR + LETTERS.indexOf(string.charAt(i));
      return h;
    }
  };

  const reverseHash = (hash) => {
    let h = HASH;
    const Ilen = hash.length;

    for (let i = 0; i < Ilen; i++) {
      h = h / FACTOR + LETTERS.indexOf(hash(i));
      return h;
    }
  };

  console.log(getHash(string));
  console.log(reverseHash(hash));
}

function teste() {
  const hash = 7;
  const factor = 37;
  const letters = 'acdegilmnoprstuw';
  const stringHash = '695527946727';
  const mod = 16;

  const palavraPura = 'amor';
  const indicesLetras = '0-7-9-11';
  const hashLetraA = '7 * 37 + 0 = 259';
  const hashLetraM = '7 * 37 + 7 = 266';
  const hashLetraO = '7 * 37 + 9 = 268';
  const hashLetraR = '7 * 37 + 11 = 270';
  const hashFinal = '259266268270';
}

// EncryptString('Luiza');
// ValidateMagicSquare([4, 9, 2], [3, 5, 7], [8, 1, 6]);
// FindEncryptedWord('teste', 695527946727);
teste();
