const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const initialSupply = 1_000_000; 
  const Token = await ethers.getContractFactory("LearnToken");
  const token = await Token.deploy(initialSupply);
  await token.waitForDeployment();

  const addr = await token.getAddress();
  console.log("LearnToken deployed to:", addr);


  fs.writeFileSync(
    path.join(__dirname, "contract-address.json"),
    JSON.stringify({ LRN: addr, chain: "sepolia" }, null, 2)
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
