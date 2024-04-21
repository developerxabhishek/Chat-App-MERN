import express from "express";
import {
  registerUser,
  authUser,
  allUsers,
  logout,
  updateUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/abhi", (req, res) => {
  res.send("working");
});
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser).get("/logout", protect, logout);
router.post("/update", protect, updateUser);

export default router;
