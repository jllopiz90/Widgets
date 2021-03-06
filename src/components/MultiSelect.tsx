import { useState, useEffect } from "react";
import Chip from "./Chip";
import { ChevronDownBtn, ChevronUpBtn } from "../icons";
import OutsideAlerter from "../hooks/useOutsideElementEvent";
import useWindowDimensions from "../hooks/useWindowDimensions";

export type OptionValue = string | number | boolean;

interface MultiSelectOptions {
  value: OptionValue;
  display: string;
}

interface MultiSelectProps {
  defaultValues?: OptionValue[];
  options: MultiSelectOptions[];
  onChange: (values: OptionValue[]) => void;
  width?: string | number;
  placeHolder?: string;
  clearOptionColor?: string;
  customInput?: JSX.Element;
  customListOptionsPosition?: number;
  maxInputHeight?: number;
}

const containsOption = (haystack: MultiSelectOptions[], needle: OptionValue) =>
  haystack.some(({ value }) => value === needle);

const getDisplayFromValue = (
  haystack: MultiSelectOptions[],
  needle: OptionValue
) =>
  containsOption(haystack, needle)
    ? haystack.filter(({ value }) => value === needle)[0]["display"]
    : "Not Found";

const SelectionsContainer = ({
  width,
  placeHolder,
  isOpen,
  selected,
  options,
  onClearChip,
  clearAll,
  open,
  close,
  clearOptionColor = "rgba(199, 99, 174, 0.8)",
  maxHeight = 24,
}: {
  width: string | number;
  placeHolder: string;
  isOpen: boolean;
  selected: OptionValue[];
  options: MultiSelectOptions[];
  onClearChip: (chipValue: OptionValue) => void;
  clearAll: () => void;
  open: () => void;
  close: () => void;
  clearOptionColor?: string;
  maxHeight?: number;
}) => (
  <div
    className={`my-2 p-1 flex border border-gray-200 bg-white rounded w-${width}`}
  >
    <div className={`flex flex-auto flex-wrap mr-1 max-h-${maxHeight} overflow-y-scroll`}>
      {selected.length === 0 ? (
        <span className="flex items-center bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800">
          {placeHolder}
        </span>
      ) : (
        ""
      )}
      {selected.length > 0
        ? selected.map((item, index) => (
            <Chip
              label={`${getDisplayFromValue(options, item)}`}
              value={item}
              onClear={onClearChip}
              key={`item_${index}`}
            />
          ))
        : ""}
      {selected.length > 1 && (
        <Chip
          label="Clear All"
          onClick={clearAll}
          borderColor={clearOptionColor}
          textColor={clearOptionColor}
          paddingX={6}
        />
      )}
    </div>
    <div className="text-gray-300 w-8 py-1 pl-0.5 border-l flex items-center border-gray-200">
      {isOpen ? (
        <ChevronDownBtn onClick={close} />
      ) : (
        <ChevronUpBtn onClick={open} />
      )}
    </div>
  </div>
);

const ListItem = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <li
    className="text-gray-900 cursor-default select-none relative py-2 pl-8 pr-4 hover:bg-blue-500"
    id="listbox-option-0"
    role="option"
    onClick={onClick}
    aria-selected
  >
    <span className={`font-${selected ? "semibold" : "normal"} block truncate`}>
      {label}
    </span>
    {selected && (
      <span className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    )}
  </li>
);

const ListOptions = ({
  options,
  selected,
  listId = "listbox",
  onClick,
  customTopPosition,
}: {
  options: MultiSelectOptions[];
  selected: OptionValue[];
  listId?: string;
  onClick: (val: OptionValue) => void;
  customTopPosition?: number;
}) => {
  const [topPosition, setTopPosition] = useState(
    () =>
      (Number.isInteger(customTopPosition) && customTopPosition) ||
      (selected.length > 2 ? 110 : 60)
  );
  const { height } = useWindowDimensions();

  useEffect(() => {
    const elem = document.getElementById(listId);
    const rect = !!elem && elem.getBoundingClientRect();
    if (!!rect && rect.y + rect.height > height) {
      const newLeftPos = topPosition - (rect.y + rect.height - height) - 50;
      setTopPosition(newLeftPos);
    }
  }, [height, topPosition, listId]);

  return (
    <ul
      id="listbox"
      className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
      tabIndex={-1}
      role="listbox"
      aria-labelledby="listbox-label"
      aria-activedescendant="listbox-option-3"
      style={{
        top: topPosition,
      }}
    >
      {options.map(({ value, display }, index) => (
        <ListItem
          label={display}
          selected={selected.includes(value)}
          onClick={() => onClick(value)}
          key={`item_${index}`}
        />
      ))}
    </ul>
  );
};

const MultiSelect = ({
  options,
  onChange,
  width = "auto",
  defaultValues = [],
  placeHolder = "Select an option",
  clearOptionColor = "rgba(199, 99, 174, 0.8)",
  customInput,
  customListOptionsPosition,
  maxInputHeight = 24,
}: MultiSelectProps) => {
  const [isOpen, setShow] = useState(false);
  const [selected, setSelected] = useState(() => defaultValues);

  const open = () => setShow(true);
  const close = () => setShow(false);

  const onClearChip = (chipValue: OptionValue) => {
    const newSelected = selected.filter((value) => value !== chipValue);
    setSelected(newSelected);
    onChange(newSelected);
  };

  const onClearAll = () => {
    close();
    setSelected([]);
  };

  const onItemClick = (val: OptionValue) => {
    if (!selected.includes(val)) {
      setSelected([...selected, val]);
      onChange([...selected, val]);
    } else {
      const filtered = selected.filter((item) => item !== val);
      setSelected(filtered);
      onChange(filtered);
    }
  };

  return (
    <OutsideAlerter onClick={close}>
      <div className="mt-1 relative">
        {!customInput ? (
          <SelectionsContainer
            open={open}
            close={close}
            isOpen={isOpen}
            onClearChip={onClearChip}
            clearAll={onClearAll}
            options={options}
            placeHolder={placeHolder}
            selected={selected}
            width={width}
            clearOptionColor={clearOptionColor}
            maxHeight={maxInputHeight}
          />
        ) : (
          <div onClick={() => setShow(!isOpen)}>{customInput}</div>
        )}
        {isOpen ? (
          <ListOptions
            options={options}
            selected={selected}
            onClick={onItemClick}
            customTopPosition={customListOptionsPosition}
          />
        ) : (
          ""
        )}
      </div>
    </OutsideAlerter>
  );
};

export default MultiSelect;
