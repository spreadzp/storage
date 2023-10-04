import { ethers } from "hardhat";
import * as localContract from "./address.json";
import * as StorageContract from "./../artifacts/contracts/StorageContract.sol/StorageContract.json";

require("dotenv").config();
async function main() {
  const PRIVATE_KEY_HARDHAT = process.env.PRIVATE_KEY_HARDHAT || "0x";
  const contractAddress = localContract.address;

  const providerLocal = new ethers.JsonRpcProvider();
  const wallet = new ethers.Wallet(PRIVATE_KEY_HARDHAT, providerLocal);

  const contract = new ethers.Contract(
    contractAddress,
    StorageContract.abi,
    wallet
  );
  contract.connect(wallet);

  // Set data
  // const dataBefore =  await contract.getData();
  // console.log("🚀 ~ file: manageLocalStorage.ts:18 ~ main ~ dataBefore:", dataBefore)
  const dataToSet = "Hello, Hardhat!";
  const tx = await contract.setData(dataToSet);
  await tx.wait();
  const dataFromContract = await contract.getData();
  console.log(
    "🚀 ~ file: manageLocalStorage.ts:24 ~ main ~ dataFromContract:",
    dataFromContract
  );
  const slot = "0x01A";

  const dataLocal = await providerLocal.send("eth_getStorageAt", [
    contractAddress,
    slot,
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
