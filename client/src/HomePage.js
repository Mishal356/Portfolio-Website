import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/api/blogs')
            .then(res => setBlogs(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <nav>Menu</nav>
            <section>Slider/Hero Section</section>
            <section>
                {blogs.map(blog => (
                    <div key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                ))}
            </section>
            <footer>Footer</footer>
        </div>
    );
};

export default HomePage;
