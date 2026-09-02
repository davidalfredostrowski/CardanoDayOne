import fs from "fs";

import {
  Lucid,
  Koios
} from "@lucid-evolution/lucid";


export async function getLucid() {

  const seedPhrase =
    fs.readFileSync(
      "./wallet.mnemonic",
      "utf8"
    ).trim();


  const lucid =
    await Lucid(
      new Koios(
        "https://preprod.koios.rest/api/v1"
      ),
      "Preprod"
    );


  lucid.selectWallet.fromSeed(
    seedPhrase
  );


  return lucid;
}
