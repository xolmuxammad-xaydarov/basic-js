const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.value = value; //coming true or undefined
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    //шифрует или дефишрует
    let arr = message.toUpperCase().split('');
    let resault = [];
    let words = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    let count = 0;
    let newKey = arr.map((item) => {
      if (words.includes(item)) {
        item = key[count < key.length ? count : (count = 0)];
        count++;
        return item.toUpperCase();
      } else {
        return item;
      }
    });

    arr.forEach((item, index) => {
      if (words.includes(item)) {
        let itemNum = words.indexOf(item);
        let keyNum = words.indexOf(newKey[index]);
        let encriptoNum = itemNum + keyNum;
        if (encriptoNum > 25) {
          encriptoNum = encriptoNum - 26;
        }
        let newItem = words.find((key) => words.indexOf(key) === encriptoNum);
        resault.push(newItem);
      } else {
        resault.push(item);
      }
    });

    return this.value === undefined ? resault.join('') : resault.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    //encrypt метод результатьни оркага кайтаради
    let arr = encryptedMessage.toUpperCase().split('');
    // let newKey = [];
    let resault = [];
    let words = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    let count = 0;
    let newKey = arr.map((item) => {
      if (words.includes(item)) {
        item = key[count < key.length ? count : (count = 0)];
        count++;
        return item.toUpperCase();
      } else {
        return item;
      }
    });
    arr.forEach((item, index) => {
      if (words.includes(item)) {
        let itemNum = words.indexOf(item);
        let keyNum = words.indexOf(newKey[index]);
        let encriptoNum = itemNum - keyNum;
        if (encriptoNum < 0) {
          encriptoNum = encriptoNum + 26;
        }
        let newItem = words.find((key) => words.indexOf(key) === encriptoNum);
        resault.push(newItem);
      } else {
        resault.push(item);
      }
    });

    return this.value === undefined ? resault.join('') : resault.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
