import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    const a = 10;

    app.listen(config.port, () => {
      console.log(`Shahjhan Miah  app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

// name :Conceptual
// password :aPSEyPVJBTUpM710
