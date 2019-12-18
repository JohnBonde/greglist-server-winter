import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true, maxlength: 2000 },
    pay: { type: Number, required: true },
    requirements: { type: String },
    applied: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }

)

export default Job;