const hre = require("hardhat");

async function main() {
    const contractAddress = "0x86Cc02D66cdA2f4b924F7a8DBe51Cf40497169a1"; // Replace with actual address
    const TodoList = await hre.ethers.getContractFactory("TodoList");
    const todoList = await TodoList.attach(contractAddress);

    console.log("Adding a new task...");
    let tx = await todoList.createTask("Learn Solidity testing");
    await tx.wait();
    console.log("Task added!");

    console.log("Fetching task 1...");
    let task = await todoList.getTask(1);
    console.log("Task:", task);

    console.log("Completing task 1...");
    tx = await todoList.completeTask(1);
    await tx.wait();
    console.log("Task completed!");

    console.log("Fetching updated task 1...");
    task = await todoList.getTask(1);
    console.log("Updated Task:", task);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
