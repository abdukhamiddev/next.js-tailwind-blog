import React from 'react';
import { motion } from 'framer-motion';
import NowPlaying from './NowPlaying';
import Image from 'next/image';
const Dashboard = () => {
  return (
    <>
      <div className="pt-5 pb-1 text-center">
        <motion.div className="">
          <span className="px-5 py-3 text-xs font-bold leading-5 text-green-800 bg-green-200 rounded-full">
            DASHBOARD
          </span>
        </motion.div>
      </div>
      <div className="pl-10 mt-10 sm:pl-0">
        <div className="flex flex-col flex-wrap sm:justify-between sm:flex-row">
          <div>
            <NowPlaying />
          </div>
          <div className="lg:w-0.5 lg:h-24 lg:bg-gray-200 lg:mx-6"></div>
          <div>
            <motion.div className="flex pt-5 pb-5 pr-10 ml-0 sm:p-5 md:ml-5 sm:pb-0 sm:pr-0">
              <div className="flex flex-wrap overflow-hidden">
                <motion.div>
                  <Image
                    src="/static/images/Icon-Argent-Blog-Vente-En-Ligne.png"
                    width={60}
                    height={60}
                    priority="true"
                    quality="100"
                    alt="Icon"
                    className="rounded-[10px]"
                  />
                </motion.div>
                <div className="pl-5">
                  <h4 className="text-lg font-semibold">Online Sales</h4>
                  <h4 className="text-gray-500 font-xs">$4000</h4>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-0.5 lg:h-24 lg:bg-gray-200 lg:mx-6"></div>
          <div>
            <motion.div className="w-full pb-10 sm:p-5 sm:pb-0">
              <div className="flex flex-wrap">
                <motion.div>
                  <Image
                    src="/static/images/Icon-unsplsh-photo.png"
                    width={60}
                    height={60}
                    priority="true"
                    quality="100"
                    alt="Icon"
                    className="rounded-[10px]"
                  />
                </motion.div>
                <div className="pr-5 ml-6">
                  <h4 className="text-lg font-semibold">Views</h4>
                  <h4 className="text-gray-500 font-xs">1000</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
