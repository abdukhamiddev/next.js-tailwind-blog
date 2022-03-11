import Link from 'next/link';
import React from 'react';
import CoverImage from './coverImage';

const PostPreview = ({ title, coverImage, excerpt, slug }) => {
  return (
    <>
      <section className="overflow-hidden text-gray-600 border-t border-b cursor-pointer">
        <Link href={`/posts/${slug}`} passHref>
          <div className="px-5 py-10 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="flex flex-wrap items-center justify-center py-8 md:flex-nowrap">
                <div className="flex-shrink-0 mb-6 md:w-72 md:mb-0">
                  <CoverImage
                    slug={slug}
                    src={coverImage}
                    width={250}
                    title={title}
                    height={160}
                  />
                </div>
                <div className="md:pt-9 xl:pt-0">
                  <div className="md:flex-grow">
                    <h2 className="mb-2 text-2xl font-medium text-center text-gray-900 md:text-left ">
                      {title}
                    </h2>
                    <div className="w-[490px] md:w-auto px-[20px] md:px-0">
                      <p className="leading-relaxed text-center whitespace-wrap md:text-left">
                        {excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-center mt-2 md:justify-start">
                      <a className="inline-flex justify-center text-gray-400">
                        Read more...
                      </a>
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default PostPreview;
