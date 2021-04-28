import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

interface GroupElement {
  label?: string;
  description?: string | JSX.Element;
}

interface RadioGroupProps {
  elements: GroupElement[];
  srOnlyText?: string;
  activeBgColor?: string;
  verticalRemPadding?: number;
  horizontalRemPadding?: number;
}

const CheckIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
    <path
      d="M7 13l3 3 7-7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function RadioGroupComponent({ elements, srOnlyText, activeBgColor = 'bg-royal-blue-500', verticalRemPadding = 0, horizontalRemPadding = 0 }: RadioGroupProps) {
  const [selected, setSelected] = useState(elements[0]);

  return (
    <div className={`w-full px-${horizontalRemPadding} py-${verticalRemPadding}`}>
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          {srOnlyText && (
            <RadioGroup.Label className="sr-only">{srOnlyText}</RadioGroup.Label>
          )}
          <div className="space-y-2">
            {elements.map((element) => (
              <RadioGroup.Option
                key={element.label}
                value={element}
                className={({ active, checked }) =>
                  `${
                    active
                      ? `ring-2 ring-offset-2 ring-offset-light-blue-300 ring-white ring-opacity-60 ${activeBgColor}`
                      : ""
                  }
                  ${
                    checked
                      ? "bg-light-blue-900 bg-opacity-75 text-white bg-royal-blue-500"
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {element.label}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-light-blue-100" : "text-gray-500"
                            }`}
                          >
                            <span>{element.description}</span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default RadioGroupComponent;
