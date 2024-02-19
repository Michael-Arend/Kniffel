import { useEffect, useState } from "react";
import d1 from "../Assets/d1.png";
import d2 from "../Assets/d2.png";
import d3 from "../Assets/d3.png";
import d4 from "../Assets/d4.png";
import d5 from "../Assets/d5.png";
import d6 from "../Assets/d6.png";

interface DiceArgs {
  number: number;
  value: number;
  isLocked: boolean;
  setLocked: () => void;
}

const Dice = ({
  value,
  number,
  isLocked,
  setLocked,
}: DiceArgs): JSX.Element => {
  const [rotate, setRotate] = useState<number>(0);
  useEffect(() => {
    setRotate(Math.random() * 360);
  }, [value]);

  const getBackground = () => {
    switch (value) {
      case 1:
        return d1;
      case 2:
        return d2;
      case 3:
        return d3;
      case 4:
        return d4;
      case 5:
        return d5;
      case 6:
        return d6;
      default:
        return "";
    }
  };

  return (
    <div
      className={`dice dice-${number}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        backgroundImage: `url(${getBackground()})`,
        visibility: isLocked ? "hidden" : "visible",
      }}
      onClick={() => setLocked()}
    ></div>
  );
};

export default Dice;
