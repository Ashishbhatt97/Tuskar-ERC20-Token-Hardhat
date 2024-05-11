import hre from "hardhat";

(async () => {
  try {
    const [owner] = await hre.ethers.getSigners();

    const contract = await hre.ethers.getContractFactory("Tuskar");
    const instance = await contract.deploy(owner.address);

    console.log(await instance.getAddress());
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
})();
