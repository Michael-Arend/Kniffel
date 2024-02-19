import { Player } from "../Model/Player";
import Field from "./Field";
import Result from "../Model/Result";

interface PlayerArgs {
  resultSelected: (result: Result) => void;
  player: Player;
  isTurn: boolean;
}

const PlayerColumn = ({
  resultSelected,
  player,
  isTurn,
}: PlayerArgs): JSX.Element => {
  return (
    <div>
      <div className="field" style={{ height: "30px" }}>
        <input
          type="text"
          value={player.name}
          disabled
          style={{ marginTop: "3px" }}
        />
      </div>
      <Field value={player.ones} setValue={() => resultSelected(Result.Ones)} />
      <Field value={player.twos} setValue={() => resultSelected(Result.Twos)} />
      <Field
        value={player.threes}
        setValue={() => {
          if (isTurn) resultSelected(Result.Threes);
        }}
      />
      <Field
        value={player.fours}
        setValue={() => {
          if (isTurn) resultSelected(Result.Fours);
        }}
      />
      <Field
        value={player.fives}
        setValue={() => {
          if (isTurn) resultSelected(Result.Fives);
        }}
      />
      <Field
        value={player.sixes}
        setValue={() => {
          if (isTurn) resultSelected(Result.Sixes);
        }}
      />
      <Field value={player.upperTotal} setValue={() => {}} isDisabled />
      <Field value={player.bonus} setValue={() => {}} isDisabled />
      <Field
        value={player.upperTotal + player.bonus}
        setValue={() => {}}
        isDisabled
      />

      <div style={{ height: "21px" }} />

      <Field
        value={player.threeOfAKind}
        setValue={() => {
          if (isTurn) resultSelected(Result.ThreeOfAKind);
        }}
      />
      <Field
        value={player.fourOfAKind}
        setValue={() => {
          if (isTurn) resultSelected(Result.FourOfAKind);
        }}
      />
      <Field
        value={player.fullHouse}
        setValue={() => {
          if (isTurn) resultSelected(Result.FullHouse);
        }}
      />
      <Field
        value={player.smallStraight}
        setValue={() => {
          if (isTurn) resultSelected(Result.SmallStraight);
        }}
      />
      <Field
        value={player.largeStraight}
        setValue={() => {
          if (isTurn) resultSelected(Result.LargeStraight);
        }}
      />
      <Field
        value={player.kniffel}
        setValue={() => {
          if (isTurn) resultSelected(Result.Kniffel);
        }}
      />
      <Field
        value={player.chance}
        setValue={() => {
          if (isTurn) resultSelected(Result.Chance);
        }}
      />
      <Field value={player.lowerTotal} setValue={() => {}} isDisabled />
      <Field
        value={player.upperTotal + player.bonus}
        setValue={() => {}}
        isDisabled
      />
      <Field value={player.extraKniffel} setValue={() => {}} />
      <Field value={player.total} setValue={() => {}} />
    </div>
  );
};

export default PlayerColumn;
