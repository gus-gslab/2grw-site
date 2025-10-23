"use client";

import { useState, useEffect } from "react";

export function usePreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if preloader was already shown in this session
    const preloaderShown = sessionStorage.getItem('preloader-shown');
    
    if (preloaderShown) {
      // If already shown, skip preloader
      setIsLoading(false);
      setShowPreloader(false);
    } else {
      // Show preloader for first visit
      setIsLoading(true);
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setShowPreloader(false);
    sessionStorage.setItem('preloader-shown', 'true');
  };

  return {
    isLoading,
    showPreloader,
    handlePreloaderComplete,
  };
}
