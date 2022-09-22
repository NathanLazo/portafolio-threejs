import { InboxIcon } from "@heroicons/react/outline";
import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div className="flex justify-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{once: true}}
    >
      <div className="bg-transparent shadow-2xl sm:rounded-lg z-50 flex h-full w-full mx-auto">
        <div className="px-4 py-5 sm:p-6 flex flex-col ">
          <h3 className="text-4xl leading-8 font-semibold text-white">
            Feel free to contact me
          </h3>
          <div className="mt-8 sm:flex sm:items-start sm:justify-between">
            <div className="max-w-xl text-base text-gray-300">
              <p>
                I am currently looking for new opportunities. If you are
                interested in working with me, please feel free to send me an
                email.
              </p>
            </div>
          </div>
        </div>
        <a
          type="button"
          href="mailto: nathanlazo@outlook.com.com"
          className="h-auto inline-flex items-center px-6 py-2 border border-transparent shadow-sm font-medium rounded-md text-white gradient-button focus:ring focus:ring-purple-200"
        >
          <InboxIcon className="w-10 h-10" />
        </a>
      </div>
    </motion.div>
  );
};

export default ContactMe;
