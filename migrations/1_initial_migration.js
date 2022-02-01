const Migrations = artifacts.require('Migrations');
const DaiTokenMock = artifacts.require('DaiTokenMock');

module.exports = async function(deployer) {
	await deployer.deploy(Migrations);
	await deployer.deploy(DaiTokenMock);
	const tokenMock = await DaiTokenMock.deployed();
	// Mint 1,000 Dai Tokens for the deployer
	await tokenMock.mint(
		'0xEB502ae4dBf849Cb77C4D2275fEb79a2615D7745',
		'1000000000000000000000'
	); // address from ganashe, # of tokens + 18 zeros decimals pts
};
