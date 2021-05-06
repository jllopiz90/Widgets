import ClearBtb from "../icons/ClearBtn";

interface ChipProps {
  label: string;
  onClick?: () => void;
  onClear?: (value: string | number | boolean) => void;
  value?: string | number | boolean;
  borderColor?: string;
  textColor?: string;
  paddingX?: number;
  paddingY?: number;
}

const Chip = ({
  label,
  onClick,
  onClear,
  value,
  borderColor = "current",
  textColor = "current",
  paddingX = 2,
  paddingY = 1,
}: ChipProps) => (
  <div
    className={`flex w-max justify-center items-center cursor-pointer m-1 font-medium py-${paddingY} px-${paddingX} bg-white rounded-2xl bg-gray-100 border focus:outline-none ${
      !!onClick ? "hover:bg-gray-200" : ""
    }`}
    onClick={onClick || (() => {})}
    style={{ borderColor, color: textColor }}
  >
    {label}
    <span className="ml-1 mt-0.5">
      {!!onClear && value && (
        <ClearBtb onClick={() => onClear(value)} size={3} />
      )}
    </span>
  </div>
);

export default Chip;
