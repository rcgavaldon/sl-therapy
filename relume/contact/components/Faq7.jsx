"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas frecuentes
          </h2>
          <p className="md:text-md">
            Respuestas rápidas sobre tu consulta gratis y cómo comenzar.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              ¿Cómo agendo mi consulta?
            </h2>
            <p>
              Llama al (915) 216-9504 o completa el formulario en esta página.
              Tu consulta inicial es gratis, sin compromiso y sin necesidad de
              referido médico.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              ¿Qué incluye la consulta gratis?
            </h2>
            <p>
              Evaluación completa de tu lesión, análisis de movimiento y un plan
              inicial de recuperación. Conocerás exactamente qué necesitas para
              volver a tu deporte.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              ¿Necesito referido médico?
            </h2>
            <p>
              No. Puedes agendar directamente sin referido. Si tu seguro lo
              requiere, lo coordinamos después.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              ¿Cuánto dura la recuperación?
            </h2>
            <p>
              Depende de tu lesión y deporte. En la consulta gratis evaluamos tu
              caso específico y te damos un cronograma realista.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              ¿Qué debo traer a mi cita?
            </h2>
            <p>
              Trae identificación, seguro si lo tienes, y ropa cómoda para
              moverte. Si tienes estudios previos, tráelos también.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¿Aún tienes dudas?
          </h4>
          <p className="md:text-md">
            Escríbenos o llama. Estamos aquí para responder.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contactar" variant="secondary">
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
