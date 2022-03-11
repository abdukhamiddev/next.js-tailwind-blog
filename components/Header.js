import React from 'react';
import NextLink from 'next/link';

const Header = () => {
  return (
    <div className="bg-white">
      <nav className="px-5 pt-3 pb-2 md:px-0 bg-opacity-90">
        <div className="flex items-center justify-between">
          <div>
            <NextLink href="/" passHref>
              <video
                className="rounded-full"
                src="/static/logovideo.webm"
                height={40}
                width={40}
                quality="100"
                autoPlay
                loop
              ></video>
            </NextLink>
          </div>

          <div>
            <NextLink href="/about">
              <a className="pr-3 p-1  pl-5 text-sm font-bold text-gray-900 transition-all sm:text-base sm:p-4 hover:text-red-300 duration-[0.9] ">
                About
              </a>
            </NextLink>

            <NextLink href="/articles">
              <a className="pr-3 p-1  pl-5 text-sm font-bold text-gray-900 transition-all sm:text-base sm:p-4 hover:text-red-300 duration-[0.9] ">
                Articles
              </a>
            </NextLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
