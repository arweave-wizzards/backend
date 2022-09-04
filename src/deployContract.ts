import * as fs from 'fs';
import * as path from 'path';
import { WarpFactory } from 'warp-contracts';
// import jwk from '../../.secrets/jwk.json';
import userWallet from '../../dominik-wallet.json';

(async () => {
  const warp = WarpFactory.forMainnet();
  const contractSrc = fs.readFileSync(path.join(__dirname, '../../dist/contract.js'), 'utf8');


const walletAddress = await warp.arweave.wallets.jwkToAddress(userWallet);

console.log("JWTTTTTTT")
console.log(userWallet)
console.log(walletAddress)

  const initialState = {
    posts: []
  };

  console.log('Deployment started');
  const { contractTxId } = await warp.createContract.deploy({
    wallet: userWallet,
    initState: JSON.stringify(initialState),
    src: contractSrc,
  });
  console.log('Deployment completed: ' + contractTxId);
})();
``;
