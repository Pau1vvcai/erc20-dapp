# LearnToken (ERC-20)

This project is a simple ERC-20 token implementation using [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/) and [Hardhat](https://hardhat.org/).  
It is intended as a learning project for compiling, deploying, and verifying smart contracts on the Ethereum Sepolia testnet.

---

## Features

- Standard ERC-20 token interface
- Token name: **Learn Token**
- Symbol: **LRN**
- Decimals: 18
- Initial supply: configurable on deployment
- Owner-only `mint()` function for additional tokens

---

## Project Structure

```

erc20-dapp/
├── contracts/           # Solidity contracts
│   └── LearnToken.sol
├── scripts/             # Deployment scripts
│   └── deploy.js
├── test/                # Optional unit tests
├── .gitignore
├── hardhat.config.js
├── package.json
└── README.md

````

---

## Prerequisites

- Node.js >= 18
- npm
- MetaMask with Sepolia test ETH (from a faucet)
- Alchemy or Infura API key (for RPC access)

---

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/erc20-dapp.git
   cd erc20-dapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```
   ALCHEMY_KEY=your-alchemy-key
   PRIVATE_KEY=your-test-wallet-private-key
   ETHERSCAN_KEY=your-etherscan-api-key
   ```

---

## Compile

```bash
npx hardhat compile
```

---

## Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Example output:

```
Deployer: 0xYourWalletAddress
LearnToken deployed to: 0xYourContractAddress
```

---

## Verify on Etherscan

After deployment, verify the contract:

```bash
npx hardhat verify --network sepolia <contract-address> <initial-supply>
```

Example:

```bash
npx hardhat verify --network sepolia 0x711cf1a3351d31ea7b0c806d26392b4203ef3116 1000000
```

---

## Interacting with the Token

* Import the token into MetaMask using the deployed contract address.
* You should see your initial token balance (e.g. **1,000,000 LRN**).
* Use `transfer()` to send tokens, or `mint()` (if you are the owner) to create more.

---

## Security Notes

* Do **not** commit your `.env` file or private keys to GitHub.
* This project is for educational purposes only.
* Do not deploy this contract to mainnet without proper audits.

---

