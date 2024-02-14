import express from "express";
import User from "../models/User.js";
import path from 'path';
import multer from 'multer';
import Gallery from "../models/Gallery.js";

const router = express.Router()

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const datestring = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-');
      cb(null, datestring + path.extname(file.originalname));
    }
  });

router.post("/addimagetogallery", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("activeTransactions").populate("prevTransactions")
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } 
    catch (err) {
        return res.status(500).json(err);
    }
})

export default router