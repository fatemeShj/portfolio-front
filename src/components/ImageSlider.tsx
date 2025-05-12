"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import { ImageType } from "@/types/Image";

export default function ImageSlider({
  images,
  interval = 5000,
}: {
  images: ImageType[];
  interval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 500);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [currentIndex, images.length, interval]);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative w-full h-[300px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${images[currentIndex]?.url}`}
          alt="Image"
          className={`transition-all duration-[2000ms] ease-in-out cursor-pointer ${
            isFading ? "opacity-0" : "opacity-100"
          } object-cover`}
          fill
        />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images?.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 w-4 cursor-pointer rounded-xl ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            } transition-all duration-300 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
