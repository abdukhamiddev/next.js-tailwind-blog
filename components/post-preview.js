import Link from 'next/link';
import React from 'react';
import CoverImage from './coverImage';

const PostPreview = ({ title, coverImage, excerpt, slug }) => {
  return (
    <>
      <section>
        <Link href={`/posts/${slug}`} passHref>
          <div>
            <div>
              <div>
                <div>
                  <span>
                    <CoverImage
                      slug={slug}
                      src={coverImage}
                      width={230}
                      title={title}
                      height={140}
                    />
                  </span>
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>{excerpt}</p>
                  <div>
                    <a>Read more...</a>
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
        </Link>
      </section>
    </>
  );
};

export default PostPreview;
