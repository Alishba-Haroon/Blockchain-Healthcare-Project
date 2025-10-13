const fs = require("fs");
const path = require("path");

async function saveContractData(contractName, address) {
  const artifactsPath = path.join(__dirname, `../artifacts/contracts/${contractName}.sol/${contractName}.json`);
  const frontendDir = path.join(__dirname, "../../frontend/src/abi");

  if (!fs.existsSync(frontendDir)) {
    fs.mkdirSync(frontendDir, { recursive: true });
  }

  const artifact = JSON.parse(fs.readFileSync(artifactsPath, "utf8"));
  const data = {
    address: address,
    abi: artifact.abi
  };

  fs.writeFileSync(
    path.join(frontendDir, `${contractName}.json`),
    JSON.stringify(data, null, 2)
  );

  console.log(`✅ ${contractName} ABI & address saved to frontend/src/abi/${contractName}.json`);
}

module.exports = { saveContractData };
