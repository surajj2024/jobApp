import Job from "../models/jobapi.model.js";

export const savePost = async (req, res) => {
  //   const job = new Job(req.body);

  try {
    const jobs = req.body;
    const createdJobs = await Job.insertMany(jobs);
    res.status(201).json(createdJobs);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(201).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.deletePostId;
  try {
    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, company, location, type, description } = req.body;

  try {
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { title, company, location, type, description },
      { new: true, returnDocument: 'after' }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
