# Storage Smart Contract

StorageContract is a simple Solidity smart contract that allows you to store and retrieve a single string value on the Ethereum blockchain. It provides basic functions to set and get this value.

## Deployed contracts

[Contract in Swisstronik](https://explorer-evm.testnet.swisstronik.com/address/0xC530d5b6843ee41a261b9e9316d9f4d72EBE318b/contracts#address-tabs)

[Contract in Mumbai](https://mumbai.polygonscan.com/address/0x3946A552800c328F0Df16E00B03966360c3e7579#code)

## Interacting with the Contract
```
The StorageContract provides the following functions:

setData(string memory _newData): Sets a new string value in the contract. This function can be called by the contract owner or anyone with permission to modify the data.

getData() public view returns (string memory): Retrieves the current string value stored in the contract. This function is publicly accessible and can be called by anyone without modifying the data.
```
## Getting Started

To run and interact with the smart contract, follow the steps below.

### Prerequisites

1. Node.js: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

2. Hardhat: This project uses Hardhat for development and deployment. Install it globally using npm:

```
   npm install -g hardhat

```

## Installation
1. Clone the repository to your local machine:

```
git clone https://github.com/spreadzp/storage.git
cd storage

```
2. Install the project dependencies:
```
npm install
```

## Usage
You can perform various tasks with the smart contract using Hardhat. Here are some examples:
1. Create .env and set private key:
```
cp sample.env .env
```
2. Paste your Metamask account private key to .env
3. Compile the contracts:

```
npx hardhat compile

```

4. Deploy the contract to a local development network (Hardhat Network):
```
npx hardhat node
npm run hh-deploy-local
```
 address deployed of  the contract saved in scripts/hardhat.json
5. Deploy the contract to a Swisstronik development network (Swisstronik Network):
```
npm run hh-deploy-swisstronik
```
 address deployed of  the contract saved in scripts/swisstronik.json

6. Deploy the contract to a Mumbai development network (Mumbai Network):
```
npm run hh-deploy-mumbai
```
 address deployed of  the contract saved in scripts/mumbai.json

## Run scripts 
1. For Swisstronik Network
```
npm run manage-swisstronik-contract
```

2. For Mumbai Network
```
npm run manage-mumbai-contract
```

3. For Hardhat Network
```
npm run manage-hh-contract
```

 
