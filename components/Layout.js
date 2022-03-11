import React from 'react';
import Header from './Header';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { easing } from './easing';

const Layout = ({ children, preview }) => {
  return (
    <>
      <div className="block lg:hidden">
        <div className="max-w-screen-md mx-auto">
          <div className="sticky sticky-nav">
            <Header />
          </div>
          {children}
        </div>
      </div>
      <div className="z-50 hidden lg:block">
        <div className="flex justify-center mx-auto flex-nowrap max-w-screen-xl-plus">
          <div className="w-1/6 ">
            <div className="sticky sticky-nav">
              <motion.div
                initial={{ y: -60, opacity: 0 }}
                transition={{ duration: 1, delay: 0, ease: easing }}
                animate={{ y: 0, opacity: 1 }}
              >
                <nav className="absolute w-full pt-5 pl-10">
                  <NextLink href="/" passHref>
                    <div className="p-1">
                      <video
                        className="rounded-full cursor-pointer "
                        src="/static/logovideo.webm"
                        height={40}
                        width={50}
                        quality="100"
                        autoPlay
                        loop
                      />
                    </div>
                  </NextLink>
                </nav>
              </motion.div>
            </div>
          </div>
          <div className="w-full mx-auto max-w-screen-lg-plus">
            <div>{children}</div>
          </div>

          <div className="w-1/6 pl-12">
            <motion.div
              className="sticky sticky-nav"
              animate={{ transition: { staggerChildren: 0.05 } }}
            >
              <nav className="absolute pt-5">
                <div>
                  <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    transition={{ duration: 1, delay: 0, ease: easing }}
                    animate={{ y: 0, opacity: 1 }}
                    className="pb-4"
                  >
                    <NextLink href="/about">
                      <a className="p-1  pl-5 text-sm font-bold text-gray-900 transition-all sm:text-base sm:p-4 hover:text-red-300 duration-[0.9] ">
                        About
                      </a>
                    </NextLink>
                  </motion.div>
                  <motion.div
                    initial={{ y: -60, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: easing }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <NextLink href="/articles">
                      <a className="p-1 pb-5 pl-5 text-sm font-bold text-gray-900 transition-all sm:text-base sm:p-4 hover:text-red-300 duration-[0.9]">
                        Articles
                      </a>
                    </NextLink>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
