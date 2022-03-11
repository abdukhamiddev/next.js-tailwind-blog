import React from 'react';
import Link from 'next/link';
import PostTitle from './PostTitle';
import CoverImage from './coverImage';

const PostHeader = ({ title, coverImage, date }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
          <div>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
        </div>
        <PostTitle title={title} />
      </div>
      <div>
        <CoverImage
          title={title}
          src={coverImage}
          width={500}
          height={250}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PostHeader;
