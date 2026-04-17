"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout400() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Evaluación</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Assessment and diagnosis
            </h2>
            <p className="md:text-md">
              We start here. Every athlete gets a thorough evaluation.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Funcional</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Functional movement assessment
                </h3>
                <p>We watch how you move and find the weak links.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Más
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Biomecánico</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Biomechanical analysis
                </h3>
                <p>Gait, posture, and movement patterns analyzed in detail.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Más
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Screening</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Functional movement screen
                </h3>
                <p>FMS testing reveals movement quality and injury risk.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Más
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Diagnóstico</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Musculoskeletal diagnosis
                </h3>
                <p>We identify the root cause, not just the symptom.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Más"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
