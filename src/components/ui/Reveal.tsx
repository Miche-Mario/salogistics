"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

/** Lightweight scroll reveal — replaces framer-motion to reduce bundle & compile time */
export function Reveal({ children, className = "", delay = 0, style, onMouseEnter, onMouseLeave }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

/** Immediate fade-in on mount (for hero) */
export function FadeIn({ children, className = "", delay = 0, style }: RevealProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transition: `opacity 0.5s ease, transform 0.5s ease`,
      }}
    >
      {children}
    </div>
  );
}
