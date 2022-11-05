const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const deployer = (await getNamedAccounts()).deployer
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log(`Got Contract FundMe: ${fundMe.address}`)
    console.log("Withdrawing from Contract...")
    const transactionReceipt = await fundMe.withdraw()
    console.log("Got it back!")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
