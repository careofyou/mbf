"use client";

import React from "react";
import SectionHeading from "@/src/components/layout/section-heading";
import { projectsData } from "@/lib/data";
import Element_1 from "@/src/components/about/about";
import Element_2 from "@/src/components/about/about2";
import Element_3 from "@/src/components/about/about3";

export default function About() {


  return (
    <section id="about" className="scroll-mt-28 mb-28">
      <SectionHeading>О компании</SectionHeading>
      <div>
          <React.Fragment>
            <Element_1/>
            <Element_2/>
            <Element_3/>
          </React.Fragment>
      </div>
    </section>
  );
}
