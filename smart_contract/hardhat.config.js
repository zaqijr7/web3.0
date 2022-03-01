// https://eth-ropsten.alchemyapi.io/v2/VarBdkzlRfL11qe2XNX1Dl-QQnHp--KP

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/VarBdkzlRfL11qe2XNX1Dl-QQnHp--KP',
      accounts: ['cee9d1fff145bd15b1f91bf0068417146af5fff6336e55b0141a7c075470c065']
    }
  }
}