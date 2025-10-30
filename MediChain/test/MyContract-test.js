const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", function () {
    it("Should store and update the message", async function () {
        const MyContract = await ethers.getContractFactory("MyContract");
        const contract = await MyContract.deploy("Hello, MediChain!");
        await contract.deployed();
        expect(await contract.message()).to.equal("Hello, MediChain!");
        await contract.updateMessage("Updated message");
        expect(await contract.message()).to.equal("Updated message");
    });
});
