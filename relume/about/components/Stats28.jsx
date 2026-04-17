"use client";

import React from "react";

export function Stats28() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <div>
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Proven results from athletes who trusted the process
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              100%
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Return to sport rate
            </h3>
            <p className="mt-2">Athletes back doing what they love</p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              6
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Months average recovery
            </h3>
            <p className="mt-2">From injury to full performance</p>
          </div>
          <div className="border border-border-primary p-8">
            <p className="mb-8 text-10xl font-bold leading-[1.3] md:mb-10 md:text-[4rem] lg:mb-12 lg:text-[5rem]">
              8+
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Sports specialties
            </h3>
            <p className="mt-2">Soccer, baseball, running, and more</p>
          </div>
        </div>
      </div>
    </section>
  );
}
