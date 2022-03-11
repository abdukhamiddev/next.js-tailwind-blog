import React from 'react';
import markdownStyle from './markdown.module.css';

const PostBody = ({ children }) => {
  return (
    <div className="max-w-5xl px-5 mx-auto text-xs font-normal md:px-8 md:text-justify leading-2 sm:leading-7 ">
      <div className={markdownStyle['markdown']}>{children}</div>
    </div>
  );
};

export default PostBody;
