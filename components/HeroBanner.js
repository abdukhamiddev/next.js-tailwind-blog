import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <motion.div>
      <motion.div className="w-full px-10 pt-32 m-auto">
        <h1 className="pr-10 text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
          <div>
            I will tell my life, &#160;
            <span className="inline bg-gray-200">of a Software Engineer</span>
            &#160;👋
          </div>
        </h1>
        <br />
        <motion.div className="flex pb-10">
          <div className="flex-initial">
            <h2 className="text-sm font-normal text-gray-600">
              In a small blog, just to keep my goals!{' '}
              <span className="underline cursor-pointer hover:text-gray-400">
                (Aka the painting of death)
              </span>
            </h2>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="w-full">
        <div className="relative h-[300px] w-full object-cover mb-6 bg-gray-100">
          <Image
            src="/static/images/3D_scene_total_8.png"
            layout="fill"
            object="cover"
            priority="true"
            quality="100"
            alt="3D scene"
            className="fixed w-full h-full z-[2] overflow-hidden"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroBanner;
