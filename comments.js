// Create web server using express
// This file contains the routes for comments

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/comment');
const Post = require('../models/post');
const auth = require('../middleware/auth');

// Add comment
router.post('/add', auth, async (req, res) => {
  const postId = req.body.postId;
  const comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    content: req.body.content,
