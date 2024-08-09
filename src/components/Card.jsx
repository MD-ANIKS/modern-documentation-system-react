import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.4}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      dragSnapToOrigin={false}
      className="card relative overflow-hidden w-60 h-72 bg-zinc-900/90 rounded-2xl text-zinc-200"
    >
      <div className="flex flex-col gap-5 px-5 pt-5 text-base">
        {/* icon  */}
        {data.icon ? data.icon : <FaRegFileAlt size={28} />}
        <p className="leading-tight text-base">{data.desc}</p>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between items-center px-5 py-3">
          <span>{data.size}</span>
          <div className="bg-zinc-800 cursor-pointer w-6 h-6 rounded-full flex justify-center items-center">
            {data.close ? (
              <IoCloseSharp size={15} />
            ) : (
              <MdFileDownload size={15} />
            )}
          </div>
        </div>

        {!data.close && (
          <div
            className={`w-full flex justify-center items-center ${
              data.color ? data.color : "bg-green-600"
            } py-3 cursor-pointer`}
          >
            <span className="text-sm tracking-tight">Download Now</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
