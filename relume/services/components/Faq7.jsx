"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas
          </h2>
          <p className="md:text-md">
            Find answers about our services and what to expect from treatment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Which service suits my injury?
            </h2>
            <p>
              We start with a functional assessment to understand your specific
              condition. Whether it's a shoulder impingement, ACL recovery, or
              chronic lower back pain, we match you with the right treatment
              approach during your free consultation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Can I combine different therapies?
            </h2>
            <p>
              Absolutely. Most athletes benefit from layering techniques—dry
              needling with manual therapy, for example, or strength work paired
              with mobility training. We build a custom protocol based on what
              your body needs.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What sports do you treat?
            </h2>
            <p>
              We work with soccer players, baseball athletes, runners, and
              active adults across all sports. Our protocols are sport-specific,
              meaning we understand the demands of your game and train
              accordingly.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does recovery typically take?
            </h2>
            <p>
              Timeline depends on the injury and your starting point. We use a
              five-phase model—evaluation, pain relief, movement restoration,
              strength building, and return to play. Most athletes see
              meaningful progress within 4 to 8 weeks.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do I need a doctor's referral?
            </h2>
            <p>
              No. You can book directly without a medical referral. If you've
              had imaging or a diagnosis, bring those records. If not, we'll
              evaluate and guide you from there.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out anytime.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contacto" variant="secondary">
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
