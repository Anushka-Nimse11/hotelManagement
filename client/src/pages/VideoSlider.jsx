import { useEffect, useState } from "react";

function VideoSlider({
  slides,
  autoSlide = true,
  autoSlideInterval = 6000,
  fadeDuration = 1000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full h-[55rem] overflow-hidden bg-black">
      {/* All Videos */}
      {slides.map((video, i) => (
        <video
          key={i}
          src={video}
          autoPlay={currentIndex === i}
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0"
          style={{
            opacity: currentIndex === i ? 1 : 0,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
        />
      ))}

      {/* DOTS */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition-all
              ${
                currentIndex === i
                  ? "bg-white shadow-xl scale-125"
                  : "bg-white/30"
              }
            `}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default VideoSlider;
