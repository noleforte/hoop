import { motion } from "framer-motion";
import React from "react";

export default function InfiniteScrollRow({ images, direction = "right", speed = 30, blurTop = true, blurBottom = true }) {
  // Создаем бесконечный цикл изображений
  const infiniteImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden relative fade-mask fade-mask-vertical">
      {/* Градиентные накладки для эффекта рассеивания */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f9a9b5] via-[#f9a9b5]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f9a9b5] via-[#f9a9b5]/80 to-transparent z-10 pointer-events-none" />
      {blurTop && <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#f9a9b5] to-transparent z-10 pointer-events-none blur-sm" />}
      {blurBottom && <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#f9a9b5] to-transparent z-10 pointer-events-none blur-sm" />}

      {/* Бесконечный туннель с улучшенной анимацией */}
      <motion.div
        className="flex gap-3 md:gap-6"
        animate={{ 
          x: direction === "right" ? ["0%", "-100%"] : ["-100%", "0%"] 
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {/* Бесконечный цикл изображений */}
        {infiniteImages.map((src, i) => (
          <motion.img
            key={`infinite-${i}`}
            src={src}
            className="w-48 h-36 md:w-96 md:h-72 object-cover rounded-xl shrink-0"
            alt={`img-${i % images.length}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
} 