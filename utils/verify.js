const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("VERIFIYING CONTRACT.....")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("ALREADY VERIFIED!!")
        } else {
            console.log(e)
        }
    }
}
module.exports = { verify }
