import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, resetTimerFunc, title },
  ref
) {
  const dialogRef = useRef();
  const isMeditationSuccessful = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  let progessionStageMessage;

  if (targetTime === 30) {
    progessionStageMessage =
      "Good Going! Now you can progress to Tranquility Stage";
  } else if (targetTime === 120) {
    progessionStageMessage = "Nice! Now you can progress to Elevation Stage";
  } else if (targetTime === 180) {
    progessionStageMessage =
      "Amazing! Now you can progress to Enlightened Stage";
  } else {
    progessionStageMessage =
      "Great! Now you should try Meditation without the help of any App!";
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={resetTimerFunc}>
      {isMeditationSuccessful && (
        <h2>Congrats! It is a Successful Meditation Session!</h2>
      )}
      {!isMeditationSuccessful && (
        <h2>Sorry! Meditation target time not met!</h2>
      )}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      {!isMeditationSuccessful && (
        <p>
          You stopped the timer with
          <strong> {formattedRemainingTime} seconds left</strong>
        </p>
      )}
      {isMeditationSuccessful && (
        <>
          <p>You have Meditated beyond your target time!</p>
          <p>{progessionStageMessage}</p>
        </>
      )}
      <form method="dialog" onSubmit={resetTimerFunc}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
