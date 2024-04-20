"use client"
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useCountries } from "../lib/getCountries";
import { topLocations } from "../lib/countriesList";

export default function Countries() {
    const { getAllCountries } = useCountries();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-10 overflow-hidden px-10 w-full relative p-20"
    >
        <h1 className="text-3xl md:text-5xl  berkshire-swash-regular ">Top <span className="text-rose-600">Locations</span>  </h1>
      <div className="flex flex-col space-x-4 w-full justify-center items-center">
        <Marquee >
          {topLocations.map((sponsor,index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="pt-10 flex-col flex items-start m-3 justify-start"
            >
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                width={"300"}
                height={"300"}
                className="mix-blend-overlay "
              />
               <p>{sponsor.name}</p>
            </motion.div>
          ))}
        
        </Marquee>
        <Marquee direction="right" >
          {topLocations.map((sponsor,index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="pt-10 flex-col flex items-start m-3 justify-start"
            >
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.name}
                width={"300"}
                height={"300"}
                className="mix-blend-overlay "
              />
               <p>{sponsor.name}</p>
            </motion.div>
          ))}
        
        </Marquee>
      </div>
    </motion.div>
  );
}