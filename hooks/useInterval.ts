'use client';
/* ==========================================================
 * useInterval: runs a function every `delay` milliseconds.
 *   - delay = null  ->  stopped
 *   - pauses while the browser tab is hidden (saves battery)
 * ========================================================== */
import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const saved = useRef(callback);

  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = window.setInterval(() => {
      if (!document.hidden) saved.current();
    }, delay);
    return () => window.clearInterval(id);
  }, [delay]);
}
