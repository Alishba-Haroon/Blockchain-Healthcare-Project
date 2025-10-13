import os

# Folder structure
folders = [
    'MediChain/blockchain/contracts',
    'MediChain/blockchain/scripts',
    'MediChain/backend/services',
    'MediChain/backend/static',
    'MediChain/frontend/src/components',
    'MediChain/frontend/public',
    'MediChain/data/sample_records'
]

# Files to create with starter content
files = {
    'MediChain/blockchain/contracts/MediChain.sol': '''// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MediChain {
    struct Record {
        address patient;
        string ipfsHash;
    }

    mapping(address => Record[]) private records;
    mapping(address => mapping(address => bool)) private access;

    event RecordAdded(address indexed patient, string ipfsHash);
    event AccessGranted(address indexed patient, address indexed doctor);

    function addRecord(string memory _ipfsHash) public {
        records[msg.sender].push(Record(msg.sender, _ipfsHash));
        emit RecordAdded(msg.sender, _ipfsHash);
    }

    function grantAccess(address _doctor) public {
        access[msg.sender][_doctor] = true;
        emit AccessGranted(msg.sender, _doctor);
    }

    function canAccess(address _patient, address _doctor) public view returns(bool) {
        return access[_patient][_doctor];
    }

    function getRecords(address _patient) public view returns(Record[] memory) {
        require(_patient == msg.sender || access[_patient][msg.sender], "Access denied");
        return records[_patient];
    }
}
''',
    'MediChain/blockchain/scripts/deploy.js': '''const hre = require("hardhat");

async function main() {
  const MediChain = await hre.ethers.getContractFactory("MediChain");
  const medichain = await MediChain.deploy();
  await medichain.deployed();
  console.log("MediChain deployed to:", medichain.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
''',
    'MediChain/blockchain/hardhat.config.js': '''require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
  },
};
''',
    'MediChain/backend/app.py': '''from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "MediChain Backend Running"

if __name__ == '__main__':
    app.run(debug=True)
''',
    'MediChain/frontend/src/components/UploadRecord.js': '''import React from 'react';

function UploadRecord() {
    return <div>Upload Record Component</div>;
}

export default UploadRecord;
''',
    'MediChain/frontend/src/App.js': '''import React from 'react';
import UploadRecord from './components/UploadRecord';

function App() {
  return (
    <div>
      <h1>MediChain Frontend</h1>
      <UploadRecord />
    </div>
  );
}

export default App;
''',
    'MediChain/README.md': '''# MediChain - Blockchain Healthcare Data Sharing System

## Overview
A decentralized system for secure sharing of patient medical records using blockchain and IPFS.

## Features
- Upload patient records to IPFS
- Grant/revoke access to doctors
- Track access logs on blockchain
- Wallet integration with MetaMask

## Setup
1. Install Node.js and Python 3.x
2. Backend: `pip install flask web3`
3. Blockchain: `npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox ethers`
4. Run Hardhat local network or Ganache
5. Start Flask backend: `python app.py`
6. Start React frontend: `npm start`
'''
}

# Create folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create files with starter content
for path, content in files.items():
    with open(path, 'w') as f:
        f.write(content)

print("MediChain starter project structure created successfully!")
