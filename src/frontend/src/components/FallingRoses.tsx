import { useEffect, useState } from 'react';

interface FallingRose {
  id: number;
  left: number;
  duration: number;
}

export default function FallingRoses() {
  const [roses, setRoses] = useState<FallingRose[]>([]);

  useEffect(() => {
    let nextId = 0;

    const spawnRose = () => {
      const newRose: FallingRose = {
        id: nextId++,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 4, // 4-7 seconds
      };

      setRoses((prev) => [...prev, newRose]);

      // Remove rose after animation completes
      setTimeout(() => {
        setRoses((prev) => prev.filter((r) => r.id !== newRose.id));
      }, newRose.duration * 1000);
    };

    // Spawn a rose every 600ms
    const interval = setInterval(spawnRose, 600);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="falling-roses-container">
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="falling-rose"
          style={{
            left: `${rose.left}vw`,
            animationDuration: `${rose.duration}s`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
}
