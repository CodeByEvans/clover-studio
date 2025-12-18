"use client";

import { Sparkles, Heart, Leaf } from "lucide-react";
import Image from "next/image";

export default function QuienesSomosPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-background">
        <div className="">
          <Image
            src="/logo.svg"
            alt="Clover Studio Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Main Story Section - CHANGED: Simplified to focus on client's story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nuestra Historia
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-primary first-letter:text-2xl first-letter:font-bold">
              Somos un pequeño emprendimiento nacido de las ganas de crear con
              las manos y transformar lo cotidiano en algo especial.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Este proyecto comenzó con una idea sencilla: hacer velas que no
              solo iluminen, sino que transmitan emociones. Por ello, cada pieza
              es elaborada de forma artesanal con cariño, paciencia y mucha
              dedicación, desde la elección del aroma hasta el acabado final,
              asegurando calidad y autenticidad en cada creación.
            </p>

            <div className="bg-gradient-to-r from-cream via-transparent to-cream p-8 rounded-xl my-12">
              <p className="text-lg leading-relaxed text-foreground font-medium italic">
                "Creemos en el valor de lo hecho con amor, en los productos que
                cuentan una historia y en los detalles que hacen la diferencia.
                Las velas transforman un espacio en hogar, además de aportar
                luz, aroma y calidez."
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Gracias por ser parte de este viaje aromático que transforma
              momentos en recuerdos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
