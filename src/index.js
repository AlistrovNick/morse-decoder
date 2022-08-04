const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split('**********');
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        let letters = [];
        for (let j = 0; j < currentWord.length; j += 10) {
            let codeLetter = currentWord.substring(j, j + 10);
            letters.push(getLetter(codeLetter));
        }
        words[i] = letters.join('');
    }
    return words.join(' ');
}

function getLetter(input) {
    let i = 0;
    while (input[i] === '0') {
        i++;
    }
    let codeLetter = input.substring(i);
    let morseCode = '';
    for (let i = 0; i < codeLetter.length; i += 2) {
        morseCode += codeLetter[i + 1] === '0' ? '.' : '-';
    }
    return MORSE_TABLE[morseCode];
}

module.exports = {
    decode
}