"use client";

import React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";


export default function Contact() {
 

  return (
    <motion.section
      id="contact"
   
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]  text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1  className="text-3xl  berkshire-swash-regular md:text-5xl ">Contact us </h1>

   

      <form
        className="mt-10 flex flex-col dark:text-black"
       
      >
        <Input
          className="h-14 px-4  border-rose-500 focus:border-none transition-all rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <Textarea
          className="h-52 my-3 border-rose-500 rounded-lg  focus:border-none  borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <Button className="text-rose-600" variant={"outline"}>Submit <Send className="w-4 h-4 ml-3"/></Button>
      </form>
    </motion.section>
  );
}