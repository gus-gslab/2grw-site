"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  return { ref, isInView };
}

export function useScrollAnimationWithDelay() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  });

  return { ref, isInView };
}






