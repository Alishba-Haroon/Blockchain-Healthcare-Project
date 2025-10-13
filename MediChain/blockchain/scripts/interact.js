const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // deployed address

  const MyContract = await hre.ethers.getContractAt("MyContract", contractAddress);

  // Read the current message
  const message = await MyContract.message();
  console.log("Current message:", message);

  // Update the message
  const tx = await MyContract.updateMessage("Updated from script!");
  await tx.wait();

  // Read the updated message
  const newMessage = await MyContract.message();
  console.log("Updated message:", newMessage);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
