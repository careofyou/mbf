"use client";

import React from "react";
import SectionHeading from "@/src/components/layout/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  
  return (
    <motion.section
     
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      
      {/* <Image
          src="@/public/image002.png"
          alt="Project I worked on"
          quality={95}
          width={640}
              height={640}
          className="h-auto max-w-full w-[28.25rem] rounded-t-lg shadow-2xl"
        /> */}
        {/* <Image
              src="/public/image002.png"
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="h-auto max-w-full w-[28.25rem] rounded-t-lg shadow-2xl"
              width={640}
              height={640}
            /> */}
      <p className="mb-3 mt-2 text-lg text-gray-700">
      Основная деятельность Группы компаний Медико-биологический Союз  разработка и производство наборов реагентов для диагностики инфекционных заболеваний, в том числе социально-опасных инфекций (ВИЧ и др.).

Наборы реагентов применяются в клинико-диагностических лабораториях, лечебно-профилактических учреждений, лабораториях Службы Крови, Центров по профилактике и борьбе со СПИД более 25 лет.

 Медико-биологический Союз является третьим в РФ производителем наборов реагентов для инфекционных заболеваний – более 15 млн. анализов в год.

Также группа компаний осуществляет разработку и производство медицинского оборудования для клинико-диагностических лабораторий, автоматизированных диагностических комплексов, наборов реагентов для контроля качества лабораторных исследований. 
      </p>


    
    </motion.section>
  );
}
