import express from 'express';
const router = express.Router();
import {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
} from '../controllers/blogController.js';
import auth from '../middleware/auth.js';

router.get('/', getBlogs);
router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);

export default router;
