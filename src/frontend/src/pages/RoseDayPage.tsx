import FallingRoses from '../components/FallingRoses';

export default function RoseDayPage() {
  return (
    <div className="rose-day-page">
      <FallingRoses />
      
      <div className="rose-card">
        <h1 className="rose-heading">Happy Rose Day 🌹</h1>
        <div className="rose-name">Jayasri</div>

        <div className="roses-row">
          <span className="rose-float">🌹</span>
          <span className="rose-float rose-float-delay-1">🌹</span>
          <span className="rose-float rose-float-delay-2">🌹</span>
        </div>

        <p className="rose-message">
          Just a small rose,<br />
          to brighten your day a little 🌸<br /><br />
          Some feelings are better kept simple,<br />
          and this is one of them.
        </p>

        <footer className="rose-footer">
          – from someone who admires you
        </footer>
      </div>
    </div>
  );
}
