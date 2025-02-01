import Blog from '../models/Blog.js';

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const createBlog = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newBlog = new Blog({ title, content });
        const blog = await newBlog.save();
        res.json(blog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const updateBlog = async (req, res) => {
    const { title, content } = req.body;
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        await blog.save();

        res.json(blog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

export const deleteBlog = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ msg: 'Blog not found' });
        }

        await blog.remove();
        res.json({ msg: 'Blog removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
