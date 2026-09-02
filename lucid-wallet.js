import {
  getLucid
} from "./lucid.js";


const lucid =
  await getLucid();


const address =
  await lucid.wallet().address();


const utxos =
  await lucid.wallet().getUtxos();


console.log(
  "Wallet address:"
);

console.log(
  address
);


console.log(
  "\nUTXOs:"
);

console.dir(
  utxos,
  { depth: null }
);
