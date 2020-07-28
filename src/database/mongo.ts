import mongoose from "mongoose";
import config from "../configs/mongo";

async function connect(verbose = true) {
  try {
    await mongoose.connect(config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    if (verbose) console.info("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB \n", error);
  }
}

export default { connect };
