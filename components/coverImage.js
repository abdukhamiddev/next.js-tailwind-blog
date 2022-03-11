import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoverImage = ({ title, src, slug, height, width, layout }) => {
  const image = (
    <Image
      src={src}
      width={width}
      height={height}
      quality={100}
      alt={`Post preview ${title}`}
      className="rounded-lg"
      layout={`${layout}`}
    />
  );
  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
