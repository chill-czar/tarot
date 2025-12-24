import mongoose, { Schema, type Document, type Model } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: string; // explicitly required in request? "Duration (string, optional)" was original. User said "Price, Duration" in "Product Data Requirements". I'll keep it string optional or required based on plan. Plan didn't specify duration change. I'll keep it as string.
  isActive: boolean;
  category: "Live Reading" | "Written Reading";
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    price: { type: Number, required: true },
    duration: { type: String },
    isActive: { type: Boolean, default: true },
    category: {
      type: String,
      enum: ["Live Reading", "Written Reading"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent model overwrite in development
if (process.env.NODE_ENV === "development") {
  if (mongoose.models.TarotProduct) {
    delete mongoose.models.TarotProduct;
  }
}

const Product: Model<IProduct> =
  mongoose.models.TarotProduct ||
  mongoose.model<IProduct>("TarotProduct", ProductSchema);

export default Product;
