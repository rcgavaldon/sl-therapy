"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQ
          </h2>
          <p className="md:text-md">Questions before you book</p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do I need a doctor referral?
            </h2>
            <p>
              No. You can call and schedule a free consultation without a
              referral. If you need one for insurance, we can help you get it.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long is each session?
            </h2>
            <p>
              Most sessions run 45 to 60 minutes. Your first evaluation takes a
              bit longer so we can understand your injury and goals.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What should I bring?
            </h2>
            <p>
              Bring your insurance card if you have it, comfortable clothes you
              can move in, and any medical records from your injury or surgery.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How many sessions will I need?
            </h2>
            <p>
              It depends on your injury and your goals. We'll give you an honest
              estimate after your first evaluation. Some athletes need four
              weeks, others need three months.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you work with post-surgical patients?
            </h2>
            <p>
              Yes. We specialize in ACL, shoulder, and ankle surgery recovery.
              Bring your surgical report and clearance from your doctor.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Call or email us anytime</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact us" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
