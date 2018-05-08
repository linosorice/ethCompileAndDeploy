Web3 = require('web3')
fs = require('fs')

web3 = new Web3('http://localhost:8545')

abi = fs.readFileSync('target/Greeter_sol_Greeter.abi').toString()

Contract = new web3.eth.Contract(JSON.parse(abi), '0x815Bb1DffBEbAd7A3195d30CAeFdA9822eF40aa4')
Contract.methods.greet().call().then(a => console.log(a))