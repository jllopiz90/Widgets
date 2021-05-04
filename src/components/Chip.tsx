import ClearBtb from "./ClearBtn";

interface ChipProps {
  label: string;
  onClick?: () => void;
  onClear?: () => void;
}

const Chip = ({ label, onClick, onClear }: ChipProps) => (
  <button
    className={`flex justify-center items-center m-1 font-medium py-1 px-3 bg-white rounded-2xl bg-gray-100 border focus:outline-none ${
      !!onClick ? "hover:bg-gray-200" : ""
    }`}
    onClick={onClick || (() => {})}
    disabled={!onClick}
  >
    {label}
    <span className="ml-1 mt-0.5">
      {!!onClear && <ClearBtb onClick={onClear} size={3} />}
    </span>
  </button>
);

export default Chip;
