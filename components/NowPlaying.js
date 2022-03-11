/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const NowPlaying = () => {
  return (
    <div className="flex flex-wrap sm:p-5">
      <motion.div>
        <Image
          src="/static/images/placeholder-non-musique.png"
          width={60}
          height={60}
          alt="headset"
          className="rounded-[10px]"
          quality="100"
        />
      </motion.div>
      <motion.div>
        <div className="flex items-start pt-1 ml-6">
          <h1 className="text-lg font-semibold"> I'll move soon</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default NowPlaying;
