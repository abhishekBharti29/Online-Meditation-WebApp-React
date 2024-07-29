import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const resultModalRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    resultModalRef.current.open();
  }
  function handleTimerReset() {
    const meditationMusic = document.getElementsByClassName("audioBtn")[0];
    meditationMusic.pause();
    meditationMusic.currentTime = 0;
    setTimeRemaining(targetTime * 1000);
  }
  function startTimer() {
    const meditationMusic = document.getElementsByClassName("audioBtn")[0];
    meditationMusic.play();
    timer.current = setInterval(() => {
      setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 10);
    }, 10);
  }

  function stopTimer() {
    const meditationMusic = document.getElementsByClassName("audioBtn")[0];
    meditationMusic.pause();
    meditationMusic.currentTime = 0;
    clearInterval(timer.current);
    resultModalRef.current.open();
  }

  return (
    <>
      <ResultModal
        ref={resultModalRef}
        timeRemaining={timeRemaining}
        targetTime={targetTime}
        resetTimerFunc={handleTimerReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} seconds session</p>
        <p>
          <button onClick={isTimerActive ? stopTimer : startTimer}>
            {isTimerActive ? "Stop" : "Start"} Session
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive
            ? "Timer is active! Close your eyes and try to Meditate!"
            : ""}
        </p>
      </section>
      <audio className="audioBtn">
        <source src="src/assets/meditation-music.mp3" />
      </audio>
    </>
  );
}
