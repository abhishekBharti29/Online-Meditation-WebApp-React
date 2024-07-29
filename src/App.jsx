import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Beginner Stage" targetTime={30}></TimerChallenge>
        <TimerChallenge
          title="Tranquility Stage"
          targetTime={120}
        ></TimerChallenge>
        <TimerChallenge
          title="Elevation Stage"
          targetTime={180}
        ></TimerChallenge>
        <TimerChallenge
          title="Enlightened Stage"
          targetTime={240}
        ></TimerChallenge>
      </div>
    </>
  );
}

export default App;
