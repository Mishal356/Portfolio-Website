import React, { useEffect, useState } from 'react';
import BlogList from '../components/BlogList';
import axios from 'axios';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from the backend (replace with your actual API endpoint)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`)
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Blogs</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
}

export default Blog;
