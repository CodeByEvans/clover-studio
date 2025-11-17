"use client";
import React, { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollToId } from "@/hooks/useScrollToId";
import { sendWelcomeDiscountEmail } from "@/services/emailservice";
import { useNotifications } from "@/contexts/notifications-context";
import Image from "next/image";
import Carousel3D from "./common/Carousel3D";
import { getProducts } from "@/utils/supabase/Product";
import { Products } from "@/types/Product";

type HeroProps = {
  products: Products;
};

export const Hero = ({ products }: HeroProps) => {
  const [email, setEmail] = React.useState("");

  const { showSuccess, showError } = useNotifications();
  const { handleScrollToId } = useScrollToId();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#BEE8CC]/5 via-[#FEFCF9] to-[#FDE68A]/8 overflow-hidden relative">
      <Carousel3D products={products} />
    </section>
  );
};

export default Hero;
