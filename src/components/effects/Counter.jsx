"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function Counter({ target, suffix = "" }) {
  const ref = useRef(null);
 const isInView = useInView(ref, { once: false });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.round(value));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}