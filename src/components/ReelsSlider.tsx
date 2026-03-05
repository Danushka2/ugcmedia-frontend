import { useEffect, useRef } from "react";

const REELS = [
  {
    id: 1,
    video: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1282-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=700&fit=crop&crop=face",
    label: "Product Review",
    views: "2.4M",
  },
  {
    id: 2,
    video: "https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-in-a-sunny-field-42588-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=700&fit=crop&crop=face",
    label: "Testimonial",
    views: "1.8M",
  },
  {
    id: 3,
    video: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-dancing-in-front-of-a-mirror-42517-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=700&fit=crop&crop=face",
    label: "Unboxing",
    views: "3.1M",
  },
  {
    id: 4,
    video: "https://assets.mixkit.co/videos/preview/mixkit-a-girl-walking-through-the-city-at-night-42284-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=700&fit=crop&crop=face",
    label: "How-To",
    views: "956K",
  },
  {
    id: 5,
    video: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-in-the-street-at-night-42316-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=700&fit=crop&crop=face",
    label: "Before & After",
    views: "2.1M",
  },
  {
    id: 6,
    video: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-on-a-rooftop-42004-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=700&fit=crop&crop=face",
    label: "Day in My Life",
    views: "1.2M",
  },
  {
    id: 7,
    video: "https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-the-city-at-night-41808-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=700&fit=crop&crop=face",
    label: "Get Ready With Me",
    views: "4.5M",
  },
];

const ReelsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      if (el) {
        scrollPos += 0.5;
        // Check if we've scrolled past the first set of items
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate reels for infinite scroll effect
  const allReels = [...REELS, ...REELS];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden px-4 py-2"
      >
        {allReels.map((reel, i) => (
          <div
            key={`${reel.id}-${i}`}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border border-border shadow-lg group cursor-pointer"
          >
            {/* Video Background */}
            <video
              src={reel.video}
              poster={reel.thumbnail}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Label & views */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold text-white">{reel.label}</p>
              <p className="text-xs text-white/70 mt-0.5">{reel.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsSlider;

