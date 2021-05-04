interface ClearBtnProps {
  onClick: () => void;
  color?: string;
  size?: number;
  marginX?: number;
}

export const ClearBtn = ({
  onClick,
  color = "black",
  size = 4,
  marginX = 0,
}: ClearBtnProps) => (
  <button
    className={`mx-${marginX} p-1 focus:outline-none active:bg-gray-300 hover:bg-gray-300 rounded-full`}
    onClick={(event) => {
      onClick();
      event.stopPropagation();
    }}
  >
    <svg
      className={`w-${size} h-${size}`}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);

export default ClearBtn;
