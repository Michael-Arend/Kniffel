import d1 from "../Assets/d1.png";
import d2 from "../Assets/d2.png";
import d3 from "../Assets/d3.png";
import d4 from "../Assets/d4.png";
import d5 from "../Assets/d5.png";
import d6 from "../Assets/d6.png";

interface LockedAreaArgs {
  lockedDices: number[];
  setLocked: (i: number) => void;
  dices: number[];
}

const LockedArea = ({
  lockedDices,
  setLocked,
  dices,
}: LockedAreaArgs): JSX.Element => {
  const getBackground = (dice: number) => {
    switch (dices[dice]) {
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
    <div className="locked-area">
      {dices.map((_, index) => (
        <div
          key={index}
          className={`dice dice-locked-${index}`}
          style={{
            backgroundImage: `url(${getBackground(index)})`,
            visibility: lockedDices.includes(index + 1) ? "visible" : "hidden",
          }}
          onClick={() => setLocked(index + 1)}
        />
      ))}
    </div>
  );
};

export default LockedArea;
