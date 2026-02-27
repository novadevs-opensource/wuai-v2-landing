import { useEffect } from 'react';
import Lenis from 'lenis';
import IndexPage from './pages/IndexPage';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <IndexPage/>
    </>
  );
}

export default App;