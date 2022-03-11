import React from 'react';
import { motion } from 'framer-motion';

const HeaderTitle = () => {
  return (
    <motion.div className="ml-5">
      <motion.div>
        <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:mt-5 md:text-5xl">
          Articles
        </h2>
        <h3 className="pt-2 pb-10 pr-10 text-sm text-gray-500 sm:pr-0">
          All recently published articles on programming.
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default HeaderTitle;
