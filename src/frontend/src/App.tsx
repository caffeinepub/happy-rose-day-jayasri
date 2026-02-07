import { useState } from 'react';
import SplashPage from './pages/SplashPage';
import RoseDayPage from './pages/RoseDayPage';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <SplashPage onEnter={() => setHasEntered(true)} />;
  }

  return <RoseDayPage />;
}
