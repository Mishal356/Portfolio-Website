// src/components/BlogList.jsx
import React from 'react';

function BlogList({ blogs }) {
  // If no props are passed, use dummy data
  const dummyBlogs = [
    {
      _id: '1',
      title: 'Exploring the Mountains',
      content: 'A journey through the most breathtaking mountain ranges.',
    },
    {
      _id: '2',
      title: 'The Art of Cooking',
      content: 'Delicious recipes and cooking techniques from around the world.',
    },
    {
      _id: '3',
      title: 'Understanding Technology',
      content: 'An insight into the latest tech trends and innovations.',
    },
  ];

  const blogData = blogs && blogs.length > 0 ? blogs : dummyBlogs;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData.map((blog) => (
        <div key={blog._id} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          <p className="text-gray-700">{blog.content}</p>
          <button className="mt-4 text-blue-500 hover:underline">
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
