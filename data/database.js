import mongoose from "mongoose"

export const connectDB=()=>
  {mongoose.connect(process.env.MONGO_URI, {
    dbName: "backend",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e.message));}