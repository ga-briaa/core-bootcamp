import hre from "hardhat";

async function main() {
  const contract = await hre.ethers.getContractAt("MyNFT", "0x3C0B98e13716828855e9D14fcFdcF303BCdc3CA3");
  await contract.mint();
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});