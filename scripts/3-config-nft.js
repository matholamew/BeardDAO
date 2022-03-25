import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7FCDFf165ED14A4f33f15B9fAb2C0C1dC63b4f3B",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sexy beard",
        description: "This NFT will give you access to BeardDAO!",
        image: readFileSync("scripts/assets/beardNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()