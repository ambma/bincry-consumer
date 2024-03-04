// bincry-consumer.js
const BincryInteract = require('bincry-interact');
const bcrypt = require('bcrypt');

class BincryConsumer {
  constructor() {
    this.bincryInteract = new BincryInteract('YOUR_BINANCE_API_KEY', 'YOUR_BINANCE_API_SECRET');
    this.saltRounds = 10; // Number of salt rounds for bcrypt
  }

  async runConsumerLogic() {
    try {
      const binanceAccountInfo = await this.bincryInteract.getBinanceAccountInfo();
      console.log('Binance Account Info in Consumer:', binanceAccountInfo);

      const ethBalance = await this.bincryInteract.getEthBalance('0x5FbDB2315678afecb367f032d93F642f64180aa3');
      console.log('Ethereum Balance in Consumer:', ethBalance);

      const contractInteractionResult = await this.bincryInteract.interactWithSmartContract(
        '0xContractAddress',
        '0xYourPrivateKey',
        'yourSmartContractFunction',
        ['arg1', 'arg2']
      );
      console.log('Contract Interaction Result in Consumer:', contractInteractionResult);

      // Example usage of bcrypt
      const password = 'mySecurePassword';
      const hashedPassword = await this.hashPassword(password);
      console.log('Hashed Password:', hashedPassword);
    } catch (error) {
      console.error('Error in Consumer:', error.message);
    }
  }

  async hashPassword(password) {
    try {
      const hashedPassword = await bcrypt.hash(password, this.saltRounds);
      return hashedPassword;
    } catch (error) {
      throw new Error('Error hashing password');
    }
  }
}

module.exports = BincryConsumer;
