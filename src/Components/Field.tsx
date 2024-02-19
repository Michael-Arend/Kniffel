interface FieldArgs {
  value: number;
  setValue: () => void;
  isDisabled?: boolean;
}

const Field = ({ value, setValue, isDisabled }: FieldArgs): JSX.Element => (
  <div className="field" onClick={() => setValue()}>
    <span>{value}</span>
  </div>
);

export default Field;
