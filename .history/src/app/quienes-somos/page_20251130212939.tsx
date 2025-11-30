"use client";

import { Sparkles, Heart, Leaf } from "lucide-react";

export default function QuienesSomosPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <Sparkles className="w-12 h-12 text-primary mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Clover Studio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Una historia de pasión, aromas y momentos especiales
          </p>
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

      {/* Core Values Section - CHANGED: Focused on the essence of Clover */}
      <section className="py-24 md:py-32 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Lo que nos define
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8">
              <div className="inline-block mb-6 p-4 bg-cream rounded-full">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Hecho con Amor
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada producto es una obra de arte creada con cariño, paciencia y
                dedicación en cada detalle.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="inline-block mb-6 p-4 bg-cream rounded-full">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Calidad Artesanal
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Selección cuidadosa de aromas y materiales premium para
                garantizar autenticidad en cada creación.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="inline-block mb-6 p-4 bg-cream rounded-full">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                Transformación
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Convertimos momentos ordinarios en recuerdos especiales a través
                del poder de los aromas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
