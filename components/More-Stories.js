import React from 'react';
import PostPreview from './post-preview';

const MoreStories = ({ posts }) => {
  return (
    <section>
      <div>
        <div>
          <div>
            {posts.map((post) => (
              <div key={post.slug}>
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
