import React from 'react';
import Link from 'next/link';
import PostTitle from './PostTitle';
import CoverImage from './coverImage';

const PostHeader = ({ title, coverImage, date }) => {
  return (
    <div className="mt-16 mb-10 ">
      <div className="ml-5 sm:ml-10">
        <div className="flex items-center mt-10 mb-5">
          <div className="flex-initial">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            </svg>
          </div>
          <div className="ml-3 ">
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
        </div>
        <div className="mb-6">
          <PostTitle title={title} />
        </div>
      </div>
      <div className="">
        <div>
          <CoverImage
            title={title}
            src={coverImage}
            width={500}
            height={250}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
