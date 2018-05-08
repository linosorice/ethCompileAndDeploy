fs = require('fs')
solc = require('solc')

code = fs.readFileSync('Greeter.sol').toString()
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':Greeter'].interface)
byteCode = compiledCode.contracts[':Greeter'].bytecode

console.log(abiDefinition)
console.log(byteCode)