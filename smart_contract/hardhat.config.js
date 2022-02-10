// https://eth-ropsten.alchemyapi.io/v2/hYuKqxHAW8NIR78Re1_R6WQROuU837W0

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hYuKqxHAW8NIR78Re1_R6WQROuU837W0',
      accounts: ['94a18a1234d30abf55a798d98b704de174d13353669449f1391ab8fd31d8a665']
    }
  }
}