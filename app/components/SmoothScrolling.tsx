"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: any) {
  // smoothTouch: true

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        syncTouchLerp: 0.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2.5, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        infinite: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
