import { useState } from "react";
import DiceArea from "../Components/DiceArea";
import PlayerColumn from "../Components/PlayerColumn";
import { Player } from "../Model/Player";
import Result from "../Model/Result";

const Kniffel = (): JSX.Element => {
  const [lockedDices, setLockedDices] = useState<number[]>([]);
  const [round, setRound] = useState<number>(0);
  const [waitForResult, setWaitForResult] = useState<boolean>(false);
  const [player1, setPlayer1] = useState<Player>({ name: "Toni" } as Player);
  const [player2, setPlayer2] = useState<Player>({ name: "Micha" } as Player);
  const [diceValues, setDiceValues] = useState<number[]>([1, 1, 1, 1, 1]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(player1);

  const handleNewThrow = (dices: number[]) => {
    setRound((prev) => prev + 1);
    setDiceValues(dices);
    if (round === 2) {
      setWaitForResult(true);
    }
  };

  const handleLockedDices = (i: number) => {
    console.log(i);
    if (lockedDices.includes(i)) {
      setLockedDices(lockedDices.filter((d) => d !== i));
    } else {
      setLockedDices([...lockedDices, i]);
    }
  };

  function handleResultsSelected(result: Result, player: Player): void {
    if (round === 0) return;
    setWaitForResult(false);
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
    setRound(0);
    console.log(result);
    console.log(player.name);
  }

  // Add a return statement here
  return (
    <div className="main-area">
      <div className="kniffel-card">
        <div className="kniffel-edit-area">
          <div className="player-area">
            <PlayerColumn
              player={player1}
              resultSelected={(r) => handleResultsSelected(r, player1)}
              isTurn={currentPlayer === player1}
            ></PlayerColumn>
          </div>
          <div className="player-area">
            <PlayerColumn
              player={player2}
              resultSelected={(r) => handleResultsSelected(r, player2)}
              isTurn={currentPlayer === player2}
            ></PlayerColumn>
          </div>
        </div>
      </div>
      <div className="dice-area">
        <DiceArea
          handleRoll={handleNewThrow}
          lockedDices={lockedDices}
          setLocked={(x) => handleLockedDices(x)}
          waitForResult={waitForResult}
        />
      </div>
    </div>
  );
};
export default Kniffel;
