import { ethers } from "hardhat";
import * as fs from "fs";
import { join } from "path";

async function main() {
  const sc = await ethers.deployContract("StorageContract", ["Hello"]); 

  await sc.waitForDeployment();
  const deployedAddress = await sc.getAddress();
  const fileName = join(__dirname, `${sc.runner?.provider['_networkName']}.json`);
  console.log("sc", deployedAddress);
  fs.writeFileSync(
    fileName,
    JSON.stringify({ address: deployedAddress }, null, 2),
    "utf-8"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
