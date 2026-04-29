'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import WebGLNoise from '@/components/Common/WebGLNoise';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15,
      smoothWheel: true,
      anchors: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Defensively unregister stale service workers (e.g. leftover MSW worker
  // from previous projects on the same localhost origin) and clear caches.
  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
    if ('caches' in window) {
      caches.keys().then((keys) => keys.forEach((key) => caches.delete(key)));
    }
  }, []);

  return (
    <>
      <WebGLNoise />
      <div id="root">{children}</div>
    </>
  );
}
