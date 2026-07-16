import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEdit, setIsEdit] = useState(false);

  function handelEdit() {
    setIsEdit((isEdit) => !isEdit);

    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  }

  function handelChangeName(e) {
    setPlayerName(e.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEdit) {
    editPlayerName = (
      <input type="text" value={playerName} onChange={handelChangeName} />
    );
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEdit}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
