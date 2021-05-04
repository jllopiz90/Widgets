import { IconBtnProps } from './interfaces';

export const ChevronLeftBtn = ({
    onClick,
    color = 'currentColor',
    size = 6,
    marginX = 0,
    padding = 1,
}: IconBtnProps) => (
    <button className={`mx-${marginX} p-${padding} focus:outline-none active:bg-gray-300`} onClick={onClick}>
        <svg
            className={`w-${size} h-${size}`}
            fill="none"
            stroke={color}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

export default ChevronLeftBtn;
