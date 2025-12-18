"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
  };

  return (
    <>
      <section className="py-12 md:py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ponte en <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            ¿Tienes preguntas o quieres hacer un pedido especial? Estamos aquí
            para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-muted-foreground text-sm">+34 691 453 544</p>
              <p className="text-xs text-muted-foreground mt-1">
                De lunes a viernes, 10am - 6pm
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                ceci@clover.studio
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Respuesta en 24 horas
              </p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-muted-foreground text-sm">Entrega local</p>
              <p className="text-xs text-muted-foreground mt-1">
                Tu zona de entrega
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Horario</h3>
              <p className="text-muted-foreground text-sm">
                Lun - Sáb: 10am - 6pm
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Cerrado domingos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Envíanos un mensaje
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Completa el formulario y te responderemos lo antes posible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+34 XXX XXX XXX"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="¿Cómo podemos ayudarte?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Cuéntanos tu mensaje..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-white hover:bg-primary/90"
            >
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">
                ¿Cuánto tiempo tarda en llegar mi pedido?
              </h3>
              <p className="text-muted-foreground">
                Los pedidos se entregan en 3-5 días hábiles en la zona local.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">
                ¿Puedo devolver un producto?
              </h3>
              <p className="text-muted-foreground">
                Sí, aceptamos devoluciones dentro de 14 días desde la compra si
                el producto llega en mal estado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">
                ¿Ofrecen productos personalizados?
              </h3>
              <p className="text-muted-foreground">
                ¡Por supuesto! Podemos personalizar casi cualquier producto.
                Contáctanos para más detalles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-lg mb-2">
                ¿Cuál es el tamaño de los productos?
              </h3>
              <p className="text-muted-foreground">
                Los tamaños varían según el producto. Consulta la descripción de
                cada artículo para más información.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
