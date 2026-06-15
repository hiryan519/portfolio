"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

export function WaveBadge() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    let animation: AnimationItem | null = null;
    let isCancelled = false;

    async function loadHandAnimation() {
      const [{ default: lottie }, response] = await Promise.all([
        import("lottie-web"),
        fetch("/hand-wave.json"),
      ]);
      const animationData = await response.json();

      if (isCancelled || !containerRef.current) {
        return;
      }

      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    }

    void loadHandAnimation();

    return () => {
      isCancelled = true;
      animation?.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
      <div className="wave-badge-track absolute inset-x-0 top-0 h-[200%]">
        <div className="grid h-1/2 place-items-center">
          <div ref={containerRef} className="wave-badge-hand h-[62%] w-[62%]" />
        </div>
        <div className="grid h-1/2 place-items-center">
          <span className="font-black">HI</span>
        </div>
      </div>
    </div>
  );
}
