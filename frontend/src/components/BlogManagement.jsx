// src/components/BlogManagement.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

function BlogManagement() {
  const { token } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  const fetchBlogs = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`)
      .then(response => setBlogs(response.data.blogs))
      .catch(error => console.error('Error fetching blogs:', error));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCreate = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`, newBlog, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        setNewBlog({ title: '', content: '' });
        fetchBlogs();
      })
      .catch(error => console.error('Error creating blog:', error));
  };

  // Implement update and delete functionality similarly

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      {/* Create Blog Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Create New Blog</h3>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border mb-2"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border mb-2"
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCreate}>Create Blog</button>
      </div>
      {/* List of Blogs */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Blogs</h3>
        {blogs.map(blog => (
          <div key={blog._id} className="border-b mb-4 pb-4">
            <h4 className="text-lg font-bold">{blog.title}</h4>
            <p>{blog.content}</p>
            {/* Add Edit and Delete buttons with functionality */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogManagement;
