import { useState } from "react";
import Dice from "./Dice";
import LockedArea from "./LockedArea";
import { waitFor } from "@testing-library/react";

interface DiceAreaArgs {
  handleRoll: (dices: number[]) => void;
  lockedDices: number[];
  setLocked: (i: number) => void;
  waitForResult: boolean;
}

const DiceArea = ({
  handleRoll,
  lockedDices,
  setLocked,
  waitForResult,
}: DiceAreaArgs): JSX.Element => {
  const [dices, setDices] = useState<number[]>([1, 1, 1, 1, 1]);

  const roll = () => {
    const d: number[] = [];
    for (let i = 0; i < 5; i++) {
      if (lockedDices.includes(i + 1)) {
        d.push(dices[i]);
      } else {
        d.push(Math.floor(Math.random() * 6) + 1);
      }

      setDices(d);
    }
    handleRoll(d);
  };
  return (
    <>
      <div className="dice-surface">
        <Dice
          value={dices[0]}
          number={1}
          isLocked={lockedDices.includes(1)}
          setLocked={() => setLocked(1)}
        />
        <Dice
          value={dices[1]}
          number={2}
          isLocked={lockedDices.includes(2)}
          setLocked={() => setLocked(2)}
        />
        <Dice
          value={dices[2]}
          number={3}
          isLocked={lockedDices.includes(3)}
          setLocked={() => setLocked(3)}
        />
        <Dice
          value={dices[3]}
          number={4}
          isLocked={lockedDices.includes(4)}
          setLocked={() => setLocked(4)}
        />
        <Dice
          value={dices[4]}
          number={5}
          isLocked={lockedDices.includes(5)}
          setLocked={() => setLocked(5)}
        />
        <LockedArea
          lockedDices={lockedDices}
          setLocked={(i) => setLocked(i)}
          dices={dices}
        />
      </div>
      <div>
        <button onClick={roll} disabled={waitForResult}>
          roll
        </button>
      </div>
    </>
  );
};

export default DiceArea;
