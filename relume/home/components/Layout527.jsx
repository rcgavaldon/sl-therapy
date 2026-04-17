"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout527() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Process</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Five phases to return
            </h2>
            <p className="md:text-md">From diagnosis to the field</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-8">
            <div className="relative flex flex-col justify-center p-6 sm:min-h-[32rem] md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                  Phase one
                </p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                  Evaluación. We assess your injury with functional tests and
                  biomechanical analysis to understand exactly what happened.
                </h2>
                <p className="text-text-alternative">Start</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Next" variant="secondary-alt">
                    Next
                  </Button>
                  <Button
                    title="Alivio del dolor"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Alivio del dolor
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                        className="size-12"
                        alt="Relume logo"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                      Pain relief comes first so you can move
                    </h3>
                    <p className="text-text-alternative">Progress</p>
                  </div>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      title="Movimiento"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Movimiento
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col p-6 md:p-8 lg:p-6">
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-black/50" />
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    className="size-full object-cover"
                    alt="Relume placeholder image"
                  />
                </div>
                <div className="relative z-10 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                        className="size-12"
                        alt="Relume logo"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-text-alternative md:text-2xl">
                      Restore your range of motion and control
                    </h3>
                    <p className="text-text-alternative">Advance</p>
                  </div>
                  <div className="mt-5 flex items-center md:mt-6">
                    <Button
                      title="Fuerza"
                      variant="link-alt"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Fuerza
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative flex flex-col p-6 md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10">
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                  Build strength for sport
                </h3>
                <p className="text-text-alternative">
                  We rebuild the muscles and stability you need to perform at
                  your level.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Strengthen" variant="secondary-alt">
                    Strengthen
                  </Button>
                  <Button
                    title="Continue"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center p-6 sm:min-h-[32rem] md:p-8 lg:p-12">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50" />
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </div>
              <div className="relative z-10">
                <p className="mb-2 inline-block text-sm font-semibold text-text-alternative">
                  Final phase
                </p>
                <h2 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
                  Retorno al deporte
                </h2>
                <p className="text-text-alternative">
                  You come back faster and stronger than before. Sport-specific
                  drills and conditioning get you game-ready.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Return" variant="secondary-alt">
                    Return
                  </Button>
                  <Button
                    title="Finish"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Finish
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
