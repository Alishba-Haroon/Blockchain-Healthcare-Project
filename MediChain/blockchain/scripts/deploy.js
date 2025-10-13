const { ethers } = require("hardhat");
const { saveContractData } = require("./save_abi");

async function main() {
  const MediChain = await ethers.getContractFactory("MediChain");
  const medichain = await MediChain.deploy();
  await medichain.waitForDeployment();

  const address = await medichain.getAddress();
  console.log("✅ MediChain deployed to:", address);

  await saveContractData("MediChain", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
