import express from "express";
const route = express.Router();
import { savePost, getAllJobs,deletePost ,updatePost} from "../controller/jobapi.controller.js";

route.get("/", getAllJobs);
route.post("/post", savePost);
route.put("/:id",updatePost);
route.delete("/:deletePostId",deletePost);

export default route;
