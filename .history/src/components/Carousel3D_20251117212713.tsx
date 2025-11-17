"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  summary: string;
  features: string[];
  image: string;
  logo: string;
  tags: string[];
  gradient: string;
  status: string;
  url: string | null;
  github?: string | null;
}

interface Carousel3DProps {
  projects: Project[];
}

export const Carousel3D = ({ projects }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardPosition = (index: number) => {
    const diff = index - activeIndex;
    const totalItems = projects.length;

    let position = diff;
    if (diff > totalItems / 2) position = diff - totalItems;
    if (diff < -totalItems / 2) position = diff + totalItems;

    const isActive = position === 0;
    const absPos = Math.abs(position);

    return { position, isActive, absPos };
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      activo: {
        label: "Activo",
        color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      },
      "no-operativo": {
        label: "No Operativo",
        color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      },
      "en-desarrollo": {
        label: "En Desarrollo",
        color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      },
    };
    return badges[status as keyof typeof badges] || badges.activo;
  };

  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Carousel Container */}
      <div
        className="relative h-[480px] flex items-center justify-center mb-8"
        style={{ perspective: "2000px" }}
      >
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            const { position, isActive, absPos } = getCardPosition(index);

            if (absPos > 2) return null;

            const statusBadge = getStatusBadge(project.status);

            return (
              <motion.div
                key={project.title}
                className="absolute w-[380px] h-[500px] cursor-pointer"
                initial={false}
                animate={{
                  x: position * 420,
                  z: isActive ? 0 : -300 - absPos * 100,
                  rotateY: position * -20,
                  scale: isActive ? 1 : 0.75 - absPos * 0.1,
                  opacity: absPos > 2 ? 0 : 1,
                  zIndex: 10 - absPos,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onClick={() => setActiveIndex(index)}
              >
                <motion.div
                  className={`relative w-full h-full bg-gradient-to-br ${project.gradient} backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-border/50`}
                  whileHover={{ scale: isActive ? 1.04 : 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 13,
                    duration: 0.3,
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-40 overflow-hidden">
                    {project.image.endsWith(".gif") ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                  </div>

                  {/* Logo Badge */}
                  <div className="absolute top-3 left-3 w-12 h-12 rounded-xl overflow-hidden border-2 border-background/50 shadow-lg">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${statusBadge.color}`}
                  >
                    {statusBadge.label}
                  </div>

                  {/* Content */}
                  <div className="relative p-5 space-y-2.5">
                    {/* Title */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Ver código en GitHub"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Ver proyecto en vivo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground">
                      {project.summary}
                    </p>

                    {/* Features - Only show on active card */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1.5"
                      >
                        <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                          Características
                        </h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-1.5 text-xs text-muted-foreground"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-primary mt-0.5 flex-shrink-0"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-card text-card-foreground rounded-md border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          +{project.tags.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 opacity-0 pointer-events-none"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-3 rounded-full shadow-lg border border-border transition-colors cursor-pointer"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-card hover:bg-accent text-foreground p-3 rounded-full shadow-lg border border-border transition-colors cursor-pointer"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((project, index) => (
          <motion.button
            key={project.title}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              index === activeIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted hover:bg-muted-foreground"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Ver ${project.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
