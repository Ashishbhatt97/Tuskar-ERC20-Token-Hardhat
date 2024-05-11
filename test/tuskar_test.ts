import { expect } from "chai";
import hre from "hardhat";
import { Tuskar } from "../typechain-types";

describe("Tuskar Token", () => {
  let tuskar: Tuskar;
  let owner: any;

  beforeEach(async () => {
    const [deployer] = await hre.ethers.getSigners();
    owner = deployer;

    const tuskarContract = await hre.ethers.getContractFactory("Tuskar");
    tuskar = await tuskarContract.deploy(deployer.address);
  });

  describe("Deployment", async () => {
    it("should have correct name and symbol", async () => {
      const name = await tuskar.name();
      const symbol = await tuskar.symbol();

      expect(name).to.equal("Tuskar");
      expect(symbol).to.equal("TSK");
    });

    it("should have the owner set correctly", async function () {
      const contractOwner = await tuskar.owner();

      expect(contractOwner).to.equal(owner.address);
    });
  });
});
