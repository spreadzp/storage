import { ethers } from "hardhat";
import * as mumbaiContract from "./mumbai.json";
import * as StorageContract from "./../artifacts/contracts/StorageContract.sol/StorageContract.json";

require("dotenv").config();
async function main() {
  const PRIVATE_KEY = `0x${process.env.PRIVATE_KEY}` || "0x";
  const contractAddress = mumbaiContract.address;
  console.log("🚀 ~ file: manageMumbai.ts:9 ~ main ~ PRIVATE_KEY:", PRIVATE_KEY)

  const provider = new ethers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/");
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  console.log("🚀 ~ file: manageMumbai.ts:13 ~ main ~ wallet:", wallet)

  const contract = new ethers.Contract(
    contractAddress,
    StorageContract.abi,
    wallet
  );
  contract.connect(wallet);

  const dataToSet = "Hello, Hardhat!";
  const tx = await contract.setData(dataToSet);
  await tx.wait();
  console.log("🚀 ~ file: manageLocalStorage.ts:20 ~ main ~ tx:", tx);

  const slot = "0x01A";

  const dataLocal = await provider.send("eth_getStorageAt", [
    contractAddress,
    slot,
    "latest",
  ]);
  console.log(
    "🚀 ~ file: manageLocalStorage.ts:19 ~ main ~ dataLocal:",
    dataLocal
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
