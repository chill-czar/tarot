import mongoose from "mongoose";
import { env } from "~/env";

type MongooseConnection = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Global cache to prevent multiple connections in dev
const globalForMongoose = global as unknown as {
  mongoose: MongooseConnection;
};

const cached = globalForMongoose.mongoose || { conn: null, promise: null };

if (!globalForMongoose.mongoose) {
  globalForMongoose.mongoose = cached;
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(env.MONGODB_URI, opts)
      .then((mongoose) => {
        if (process.env.NODE_ENV === "development") {
          console.log("MongoDB connected successfully");
        }
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
