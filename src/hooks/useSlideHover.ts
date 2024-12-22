import { useCallback, useEffect, useRef } from 'react';

export const useSlideHover = () => {
  const slideDivRef = useRef<HTMLDivElement>(null);
  const glowDivRef = useRef<HTMLDivElement>(null);

  const rotateToMouse = useCallback((e: MouseEvent) => {
    const slideDivElement = slideDivRef.current;
    const glowDivElement = glowDivRef.current;

    if (!slideDivElement || !glowDivElement) return;

    const bounds = slideDivElement.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.left;
    const topY = mouseY - bounds.top;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };

    glowDivElement.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #7a787855,
        #00000000
      )
    `;
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (slideDivRef.current) {
      document.addEventListener('mousemove', rotateToMouse);
    }
  }, [rotateToMouse, slideDivRef]);

  const handleMouseLeave = useCallback(() => {
    document.removeEventListener('mousemove', rotateToMouse);
    if (glowDivRef.current) {
      glowDivRef.current.style.backgroundImage = '';
    }
  }, [rotateToMouse, glowDivRef]);

  useEffect(() => {
    const slideDivElement = slideDivRef.current;
    if (slideDivElement) {
      slideDivElement.addEventListener('mouseenter', handleMouseEnter);
      slideDivElement.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (slideDivElement) {
        slideDivElement.removeEventListener('mouseenter', handleMouseEnter);
        slideDivElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [slideDivRef, glowDivRef, handleMouseEnter, handleMouseLeave]);

  return { slideDivRef, glowDivRef };
};
