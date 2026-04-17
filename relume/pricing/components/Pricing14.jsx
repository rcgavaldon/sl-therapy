"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Tarifas</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Service pricing
          </h2>
          <p className="md:text-md">
            Rates vary by service. Contact us for a personalized quote.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Evaluación</TabsTrigger>
            <TabsTrigger value="yearly">Rehabilitación</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Functional assessment and diagnosis
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    Consulta
                  </h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Movement analysis and testing</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Biomechanical evaluation included</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Full diagnostic report provided</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Contáctanos" className="w-full">
                  Contáctanos
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Sports and post-surgical recovery
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    Sesión
                  </h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>ACL, shoulder, and ankle rehab</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Lower back and neck pain treatment</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Tendinopathy and muscle injury care</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Return to sport protocols</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Personalized recovery plan</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Contáctanos" className="w-full">
                  Contáctanos
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Terapias especializadas
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    Sesión
                  </h1>
                  <p className="mt-2 font-medium">
                    Dry needling and advanced techniques
                  </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Manual therapy and mobilization</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Myofascial release techniques</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Contáctanos</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Performance and prevention" className="w-full">
                  Performance and prevention
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-6 mb-6 text-center md:mb-8">
                  <h6 className="text-md font-bold leading-[1.4] md:text-xl">
                    Sesión
                  </h6>
                  <h1 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                    Strength and conditioning programs
                  </h1>
                  <p className="mt-2 font-medium">
                    Sport-specific injury prevention
                  </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Return to play assessment</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Football and baseball training</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Performance optimization</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Contáctanos</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Recovery and wellness</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Sesión" className="w-full">
                  Sesión
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
