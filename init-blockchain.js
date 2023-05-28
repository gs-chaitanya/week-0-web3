//start here

import { writeBlockchain } from "./blockchain-helpers.js";

export const initBlockchain = () => {
	const genesisBlock = {
		//add hash and previous hash property to genesisBlock
		hash: "0",
		previousHash: null,
	};

	const blockchain = [genesisBlock];

	//create a blockchain constant containing genesisBlock

	writeBlockchain(blockchain);
};

initBlockchain();