'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MarqueeProps {
  text: string;
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  copyableText?: string;
  spacing?: number;
  enableCopy?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  speed = 1,
  backgroundColor = 'bg-black',
  textColor = 'text-white',
  className = '',
  copyableText,
  spacing = 200,
  enableCopy = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const textToCopy = copyableText || text;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  useEffect(() => {
    if (!contentRef.current || !containerRef.current) return;

    const calculateRepetitions = () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      const span = document.createElement('span');
      span.className = 'inline-block font-bold font-space';
      span.textContent = text;

      const spacer = document.createElement('span');
      spacer.className = 'inline-block';
      spacer.style.width = `${spacing}px`;
      spacer.innerHTML = '&nbsp;';

      const wrapper = document.createElement('div');
      wrapper.className = 'inline-flex items-center';
      wrapper.appendChild(span);
      wrapper.appendChild(spacer);

      content.appendChild(wrapper);

      const itemWidth = wrapper.offsetWidth;
      const containerWidth = container.offsetWidth;

      const requiredItems = Math.ceil(containerWidth / itemWidth) + 1;

      for (let i = 1; i < requiredItems; i++) {
        const newWrapper = wrapper.cloneNode(true);
        content.appendChild(newWrapper);
      }

      content.style.setProperty('--marquee-width', `${itemWidth}px`);
      content.style.setProperty('--marquee-duration', `${Math.max(5, 20 / speed)}s`);
    };

    calculateRepetitions();

    const handleResize = () => {
      calculateRepetitions();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [text, spacing, speed]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.animationPlayState = isPaused ? 'paused' : 'running';
    }
  }, [isPaused]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${backgroundColor} ${textColor} py-2 ${className} relative`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onMouseMove={handleMouseMove}
      onClick={isPaused ? copyToClipboard : undefined}
    >
      <div
        ref={contentRef}
        className="whitespace-nowrap marquee-animation"
        style={{
          display: 'inline-block',
          animationName: 'marquee',
          animationDuration: 'var(--marquee-duration)',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      />

      {(isPaused && enableCopy) && (
        <div
          className="absolute bg-gray-800 text-white text-xs rounded px-2 py-1 z-10 pointer-events-none"
          style={{
            left: `${tooltipPosition.x + 10}px`,
            top: `${tooltipPosition.y + 0}px`,
            transform: 'translateY(-50%)',
            opacity: 1,
          }}
        >
          {isCopied ? "Copied!" : "Click to copy"}
        </div>
      )}
    </div>
  );
};

export default Marquee;
