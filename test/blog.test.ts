import ArLocal from 'arlocal';
import { JWKInterface } from 'arweave/node/lib/wallet';
import { LoggerFactory, Warp, WarpFactory, Contract } from 'warp-contracts';
import { BlogState } from '../src/contracts/model/blog-state';
import fs from 'fs';
import path from 'path';

jest.setTimeout(30000);

describe('Testing core blogging functionalities', () => {
  let ownerWallet: JWKInterface;
  let owner: string;

  let user2Wallet: JWKInterface;
  let user2: string;

  let user3Wallet: JWKInterface;
  let user3: string;

  let initialState: BlogState;

  let arlocal: ArLocal;
  let warp: Warp;
  let blog: Contract<BlogState>;

  let contractSrc: string;

  let contractId: string;

  beforeAll(async () => {
    arlocal = new ArLocal(1820, false);
    await arlocal.start();

    LoggerFactory.INST.logLevel('error');

    warp = WarpFactory.forLocal(1820);

    ({ jwk: ownerWallet, address: owner } =
      await warp.testing.generateWallet());

    ({ jwk: user2Wallet, address: user2 } =
      await warp.testing.generateWallet());

    ({ jwk: user3Wallet, address: user3 } =
      await warp.testing.generateWallet());

    initialState = {
      posts: []
    };

    contractSrc = fs.readFileSync(
      path.join(__dirname, '../dist/contract.js'),
      'utf8'
    );

    // deploying the contract
    ({ contractTxId: contractId } = await warp.createContract.deploy({
      wallet: ownerWallet,
      initState: JSON.stringify(initialState),
      src: contractSrc
    }));
    console.log('Deployed contract: ', contractId);

    // connecting to the contract
    blog = warp.contract<BlogState>(contractId).connect(ownerWallet);
  });

  // after executing all of the tests stop the local instance
  afterAll(async () => {
    await arlocal.stop();
  });

  it('should deploy contract', async () => {
    const contractTx = await warp.arweave.transactions.get(contractId);
    expect(contractTx).not.toBeNull();
  });

  it('should read Blog state', async () => {
    expect((await blog.readState()).cachedValue.state).toEqual(initialState);
  });

  it('should properly add posts', async () => {
    await blog.writeInteraction({
      function: 'addPost',
      content: 'Hello world!'
    });

    const { cachedValue } = await blog.readState();
    expect(cachedValue.state.posts[0]).toEqual({
      id: 1,
      creator: owner,
      content: 'Hello world!',
      votes: { addresses: [], status: 0 }
    });
  });
});