const hre = require("hardhat");

async function main() {
    const TodoList = await hre.ethers.getContractFactory("TodoList");
    const todoList = await TodoList.deploy();
    await todoList.waitForDeployment();

    const contractAddress = await todoList.getAddress();
    console.log("TodoList deployed to:", contractAddress);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
