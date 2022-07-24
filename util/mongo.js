import mongoose from "mongoose";

const DATA_URL =
  "mongodb://xuyen:12345@localhost:27017/food-details?retryWrites=true&w=majority";

if (!DATA_URL) {
  throw new Error("No data url found");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = { bufferCommand: false };
    cached.promise = mongoose.connect(DATA_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;
