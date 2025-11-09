const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsObj = {};
  
  for (let domain of domains) {
    const parts = domain.split('.').reverse();
    let dns = '';

    for (let part of parts) {
      dns = dns + '.' + part;
      dnsObj[dns] = (dnsObj[dns] || 0) + 1;
    }
  }

  return dnsObj;
}

module.exports = {
  getDNSStats
};
