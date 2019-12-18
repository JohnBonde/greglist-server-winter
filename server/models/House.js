import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    price: { type: Number, required: true },
    size: { type: Number, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    location: { type: String, required: true },
    imgUrl: { type: String },
    bought: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House;