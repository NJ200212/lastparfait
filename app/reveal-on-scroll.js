"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -18% 0px"
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal${isVisible ? " is-visible" : ""}`}>
      {children}
    </div>
  );
}
