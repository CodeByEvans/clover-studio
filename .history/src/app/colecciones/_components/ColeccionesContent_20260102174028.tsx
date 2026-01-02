"use client";
import { useData } from "@/context/data-context";
import Link from "next/link";

export const ColeccionesContent = () => {
  const { collections } = useData();
  return (
    <>
      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between ">
                    <Link
                      href={`/colecciones/${collection.slug}`}
                      className="text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      Ver más →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ColeccionesContent;
