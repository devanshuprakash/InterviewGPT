import moonoose from "mongoose";
const connectDb = async () => {
  try {
    await moonoose.connect(process.env.MONGODB_URL)
    console.log("Connected to MongoDB");
  }
   catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDb;