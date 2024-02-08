const express = require('express');
const router = express.Router();

const allPosts = require('../controllers/posts/allPosts');
const createGet = require('../controllers/posts/createGet');
const createPost = require('../controllers/posts/createPost');
const updateGet = require('../controllers/posts/updateGet');
const updatePost = require('../controllers/posts/updatePost');
const deletePost = require('../controllers/posts/deletePost');

router.get('/posts', allPosts);
router.get('/posts/create', createGet);
router.post('/posts/create', createPost);
router.get('/posts/update/:id', updateGet);
router.post('/posts/update/:id', updatePost);
router.post('/posts/delete/:id', deletePost);

module.exports = router;
