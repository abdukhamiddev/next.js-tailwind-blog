import React from 'react';
import Link from 'next/link';
import PostTitle from './PostTitle';
import CoverImage from './coverImage';
import { motion } from 'framer-motion';
import { easing } from './easing';

const PostHeader = ({ title, coverImage, date }) => {
  return (
    <div className="mt-16 mb-10 ">
      <motion.div animate={{ transition: { staggerChildren: 0.05 } }}>
        <motion.div
          className="flex items-center mt-10 mb-5"
          initial={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
        >
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
        </motion.div>
        <motion.div
          className="mb-6"
          initial={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.6 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <PostTitle title={title} />
        </motion.div>
      </motion.div>
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
