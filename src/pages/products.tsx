"use client";

import React from "react";
import SectionHeading from "@/src/components/section-heading";

import Element_1 from "@/src/components/products/product_1";
import Element_2 from "@/src/components/products/product_2";

export default function Product() {


  return (
    <section id="products" className="scroll-mt-28 mb-28">
      <SectionHeading>Продукция</SectionHeading>
      <div>
          <React.Fragment>
            <Element_1/>
            <Element_2/>
          </React.Fragment>
      </div>
    </section>
  );
}
