import { useEffect } from 'react';

interface SplashPageProps {
  onEnter: () => void;
}

export default function SplashPage({ onEnter }: SplashPageProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onEnter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEnter]);

  return (
    <div
      className="splash-screen"
      onClick={onEnter}
      role="button"
      tabIndex={0}
      aria-label="Tap to enter"
    >
      <div className="splash-content">
        <div className="splash-rose">🌹</div>
        <h1 className="splash-title">Tap to enter</h1>
        <div className="splash-hint">Click anywhere or press Enter</div>
      </div>
    </div>
  );
}
