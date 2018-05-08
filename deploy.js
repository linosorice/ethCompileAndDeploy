let ganache = require('ganache-cli')
Web3 = require('web3')
fs = require('fs')

web3 = new Web3('http://localhost:8545')

byteCode = fs.readFileSync('target/Greeter_sol_Greeter.bin').toString()
abiDefinition = fs.readFileSync('target/Greeter_sol_Greeter.abi').toString()
Contract = new web3.eth.Contract(JSON.parse(abiDefinition))
result = Contract.deploy({data: byteCode, arguments: ['Hello Ciccio']})

result.send({
    from: '0x4ffc7547011b3044a604e46ce150a01a3a173df3',
    gas: 1000000,
    gasPrice: '5'
})
.then(function(newContractInstance){
    console.log(newContractInstance.options.address) // instance with the new contract address
});