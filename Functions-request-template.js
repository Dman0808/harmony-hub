const fs = require("fs")
const { Location, ReturnType, CodeLanguage } = require("@chainlink/functions-toolkit")

const requestConfig = {
  source: fs.readFileSync("./Styrobob-request.js").toString(),
  codeLocation: Location.Inline,
  secretsLocation: Location.DONHosted,
  args: ["<StyroBob URL>", "<StyroBob Prompt>"],
  codeLanguage: CodeLanguage.JavaScript,
  expectedReturnType: ReturnType.string
}

module.exports = requestConfig

// npx hardhat functions-simulate-script
// npx hardhat functions-deploy-consumer --network ethereumSepolia --verify true
// npx hardhat functions-sub-create --network ethereumSepolia --amount 100 --contract 0x68d38C226D39d0D07FD2BEBa60A5A5b7729d5719
// npx hardhat functions-request --network ethereumSepolia --contract 0x68d38C226D39d0D07FD2BEBa60A5A5b7729d5719 --subid 3728