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
            Everything you need to know about our rates and sessions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Does insurance cover treatment?
            </h2>
            <p>
              We work with most major insurance plans. Bring your card to your
              first visit and we'll verify coverage. Out-of-pocket rates are
              transparent and discussed upfront.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What payment methods do you accept?
            </h2>
            <p>
              We accept cash, credit cards, and debit. Payment is due at the
              time of service unless you're using insurance.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are there package discounts?
            </h2>
            <p>
              Yes. Commit to a series of sessions and we'll work out a rate that
              fits your recovery plan. Ask during your consultation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long is each session?
            </h2>
            <p>
              Most sessions run 45 to 60 minutes depending on your injury and
              treatment plan. Your first consultation is a full assessment.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What if I need to cancel?
            </h2>
            <p>
              Cancel with 24 hours notice and there's no charge. Less notice and
              we'll bill the session. Life happens—just let us know.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            More questions?
          </h4>
          <p className="md:text-md">Reach out and we'll answer them.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contacta" variant="secondary">
              Contacta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
