const { expect } = require("chai");

describe("MediChain", function () {
  it("Should deploy and store/retrieve patient data", async function () {
    const MediChain = await ethers.getContractFactory("MediChain");
    const medichain = await MediChain.deploy();
    await medichain.waitForDeployment();

    await medichain.addPatient("Ali", 25, "A+", "Flu");

    const patient = await medichain.getPatient(0);

    expect(patient.name).to.equal("Ali");
    expect(patient.age).to.equal(25);
    expect(patient.bloodGroup).to.equal("A+");
    expect(patient.diagnosis).to.equal("Flu");
  });
});
