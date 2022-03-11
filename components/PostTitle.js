import React from 'react';

const PostTitle = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold leading-tight tracking-tighter text-gray-800 md:text-5xl lg:text-6xl md:leading-none">
      {title}
    </h1>
  );
};

export default PostTitle;
