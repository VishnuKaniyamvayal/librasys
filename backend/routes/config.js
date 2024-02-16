import express from "express";
import User from "../models/User.js";
import path from 'path';
import multer from 'multer';
import Gallery from "../models/Gallery.js";

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    // Generate a unique filename with current date-time
    const date = new Date().toISOString().replace(/\W/g, '_');
    const filename = `${date}.jpg`;
    cb(null, filename); // Use the original filename
  }
});

const upload = multer({ storage });

router.post("/addimagetogallery", upload.single('image') , async (req, res) => {
    try {
      const image = req.file;

      if (!image) {
        return res.status(400).json({ error: 'No image uploaded' });
      }

    // Store the image path and original filename in the Gallery model
    const newImage = new Gallery({
      ImageUrl: image.path,
      ImageName: image.originalname
    });

    await newImage.save();

    res.status(201).json({ message: 'Image uploaded successfully' });
    } 
    catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/getgallery",async(req,res)=>{
  try{
    const response = await Gallery.find({});
    res.status(200).send(response)
  }
  catch(err) {
    res.status(504).json(err)
  }
})

router.get("/footerdetails",async(req,res)=>{
  try{
    const response = await User.find({}).sort({ createdAt: 1 }).limit(1);
    res.status(200).send(response)
  }
  catch(err) {
    res.status(504).json(err)
  }
})

export default router