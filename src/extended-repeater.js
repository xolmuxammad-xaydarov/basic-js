const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';

  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const additionSeparator =
    options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';

  let result = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;

    for (let k = 0; k < additionRepeatTimes; k++) {
      result += addition;
      if (k + 1 !== additionRepeatTimes) result += additionSeparator;
    }

    if (i + 1 !== repeatTimes) result += separator;
  }

  return result;
}

module.exports = {
  repeater,
};
