import { Contract, WarpFactory } from "warp-contracts";
import userWallet from '../../dominik-wallet.json';
import { BlogState } from "./contracts/model/blog-state";

(async () => {
//1. defining contractId

const dominikAddress = 'niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU'
const contractId = 't3Kf6bG-DO8A2g6hYebEbgJIs0nJ1M-u7NvYrwx0QPw' //contract id 
//2. initialising contract instance
let contract: Contract<BlogState>; //contract to load

//3. warp adding
const warp = WarpFactory.forMainnet();

//4. walletAddress getting from userWallet json
const walletAddress = await warp.arweave.wallets.jwkToAddress(userWallet);

//5. connecting userWallet to a contract
contract = warp.contract<BlogState>(contractId).connect(userWallet);

//6. reading state of contract
let stateOfContract = (await contract.readState()).cachedValue.state;

console.log(stateOfContract);

await contract.writeInteraction({
    function: 'addPost',
    content: 'Hello world!',
    title: 'Example title',
    category: 'Beginner'
  });

// const { cachedValue } = await contract.readState();

// cachedValue.state.messages.forEach((x) => console.log(x))

//const { result } = await contract.viewState({ function: 'readMessageByCreator', creator: 'niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU' });

const { result } = await contract.viewState({
    function: 'readPost',
    author: dominikAddress
  });


console.log(result)
}
) ()
//:)

