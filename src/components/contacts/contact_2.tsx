

import React from "react";
import SectionHeading from "@/src/components/section-heading";
import { motion } from "framer-motion";


export default function Contact_2() {
  

  return (
    <motion.section
      id="contact"
      
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeading>Контакты</SectionHeading>

      <p className="text-gray-700 -mt-6">
       Текст Текст Текст{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        Текст Текст Текст
      </p>

      
       
    </motion.section>
  );
}
