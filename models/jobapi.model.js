import mongoose from "mongoose";

const jobPostSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobPostSchema);

export default Job;
