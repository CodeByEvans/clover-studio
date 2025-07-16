"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
  productName: string;
  colorScheme: "general" | "sober" | "colorful";
}

export default function ProductImageGallery({
  images,
  selectedImage,
  onImageSelect,
  productName,
  colorScheme,
}: ProductImageGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const getColorClasses = () => {
    switch (colorScheme) {
      case "sober":
        return {
          border: "border-[#EFE6DD]",
          activeBorder: "border-[#8B1E3F]",
          background: "bg-[#F9F7F3]",
          button: "bg-[#D6BA8A] hover:bg-[#c9a876] text-[#8B1E3F]",
          zoomButton: "bg-[#8B1E3F] hover:bg-[#7a1a37]",
        };
      case "colorful":
        return {
          border: "border-[#F8C8DC]/50",
          activeBorder: "border-[#8B1E3F]",
          background: "bg-gradient-to-br from-[#F8C8DC]/10 to-[#C9EAF3]/10",
          button: "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]",
          zoomButton:
            "bg-gradient-to-r from-[#F8C8DC] to-[#D3B5E5] hover:from-[#f5b8d1] hover:to-[#c9a8db] text-[#8B1E3F]",
        };
      default:
        return {
          border: "border-gray-200",
          activeBorder: "border-[#8B1E3F]",
          background: "bg-gray-50",
          button: "bg-[#F8C8DC] hover:bg-[#f5b8d1] text-[#8B1E3F]",
          zoomButton: "bg-[#8B1E3F] hover:bg-[#7a1a37]",
        };
    }
  };

  const colors = getColorClasses();

  const nextImage = () => {
    onImageSelect((selectedImage + 1) % images.length);
  };

  const prevImage = () => {
    onImageSelect(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className={`relative ${colors.background} rounded-2xl overflow-hidden group`}
      >
        <div className="aspect-square relative">
          <Image
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`${productName} - Vista ${selectedImage + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 ${colors.button} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 ${colors.button} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(true)}
            className={`absolute top-4 right-4 w-10 h-10 ${colors.zoomButton} text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          {images.length > 1 && (
            <div
              className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${colors.button} px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {selectedImage + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index
                  ? `${colors.activeBorder} shadow-lg`
                  : `${colors.border} hover:${colors.activeBorder}`
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Miniatura ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`${productName} - Vista ampliada`}
              width={800}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
