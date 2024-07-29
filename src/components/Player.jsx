import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const playerNameInput = useRef();

  function handleNameSubmit() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerNameInput} />
        <button onClick={handleNameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
