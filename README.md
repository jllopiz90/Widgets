# Introduction UI Widgets Components

A small collection of UI widgets created with react, typescript and tailwindcss.

## Widgets

1. `StatsIndicator`: Component to show a given stat, may display an icon or not.\
    **Props:**

   ```typescript
    interface StatsIndicatorProps { 
        stat: string;
        name: string;
        icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
        iconBGColorClass?: string;
        iconColor?: string;
        trend?: Trend;
        change?: string;
    }
    ```

    **Example:**
    
    ```typescript
        <StatsIndicator
          name="Total Subscribers"
          stat="71,897"
          icon={CursorClickIcon}
          iconBGColorClass="bg-green-500"
          trend={{change: '14%', type: 'increase'}}
         />
    ```

   <img width="292" alt="Screen Shot 2021-04-28 at 5 44 48 PM" src="https://user-images.githubusercontent.com/17462829/116476592-6fff1880-a849-11eb-8694-dc0a440f3ded.png">

1. `RadioGroup`: Component to present some choices to the user to choose 1 among all.
    **Props:**

    ```typescript
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
    ```

    **Example:**

    ```typescript
    const plans = [
        {
            label: "Startup",
            description: (
                <>
                    <span>
                        12GB / 6 CPUs
                    </span>{" "}
                <span aria-hidden="true">&middot;</span>{" "}
                <span>160 GB SSD disk</span>
                </>
            ),
        },
        {
          label: "Business",
          description: "16GB",
      },
      {
          label: "Enterprise",
          description: "32GB 12 CPUs 1024 GB SSD disk",
      },
    ];

    <RadioGroup 
        elements={plans}
        srOnlyText="Server size"
    />
    ```

   <img width="394" alt="Screen Shot 2021-04-28 at 7 56 35 PM" src="https://user-images.githubusercontent.com/17462829/116487106-3801d080-a85d-11eb-9791-e5e57168a957.png">

1. `Modal`: Component to display a modal dialog with info.
    **Props:**

    ```typescript
    interface ModalProps {
    open: boolean;
    title?: string;
    content?: string | JSX.Element;
    dismissText?: string;
    closeModal: () => void;
    }
    ```

    **Example:**

    ```typescript
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const openModal = () => setOpen(true);

    <>
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
        {open && (
          <Modal
            closeModal={closeModal}
            open={open}
            content="Your payment has been successfully submitted. We’ve sent
                    your an email with all of the details of your order."
            title="Payment successful"
            dismissText="Got it, thanks"
          />
        )}
    </>
    ```

    <img width="520" alt="Screen Shot 2021-04-29 at 12 23 12 AM" src="https://user-images.githubusercontent.com/17462829/116502559-cdaf5700-a881-11eb-8a21-511199c757dd.png">

    1. `Pagination`: Component to navigate through pages.
        **Props:**

        ```typescript
        interface PaginationProps {
            page: number; //current page
            total: number; //total number of pages
            setPage: React.Dispatch<React.SetStateAction<number>>; //function to update current page
        }
        ```

        **Example:**

        ```typescript
        const [page, setPage] = useState(1);
        
        <Pagination page={page} total={9} setPage={setPage} />
        ```

      <img width="437" alt="Screen Shot 2021-04-29 at 10 56 13 AM" src="https://user-images.githubusercontent.com/17462829/116572591-1abf1780-a8da-11eb-8807-3cd65e3b8cf3.png">

    1. `MultiSelect`: Component to choose multiple options in a dropdown.
        **Props:**

        ```typescript
        type OptionValue = string | number | boolean;

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
        ```

        **Example:**

        ```typescript
        const multiSelectOptions = [
          {value: '1', display: 'Option 1 Plus more text'},
          {value: '2', display: 'Option 2'},
          {value: '3', display: 'Option 3'},
          {value: '4', display: 'Option 4'},
          {value: '5', display: 'Option 5'},
          {value: '6', display: 'Option 6'},
          {value: '7', display: 'Option 7'},
          {value: '8', display: 'Option 8'},
        ];
        const [selectedValues, setSelectedValues] = useState<OptionValue[]>(['1']);
        <MultiSelect onChange={onMultiSelectChange} options={multiSelectOptions} defaultValues={['1']} width={72} />
        ```
        <img width="312" alt="Screen Shot 2021-05-04 at 1 43 10 PM" src="https://user-images.githubusercontent.com/17462829/117049299-f4d2b200-ace1-11eb-8350-08c909463acd.png">

        **Example with custom input:**

        ```typescript
        const customInput = () => (
          <div className="relative">
            <input
              name="customInput"
              className="truncate block mt-1 w-full pl-2 pr-6 py-1 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              value={multiSelectOptions
                .filter((option) =>
                  selectedValues.some((selected) => selected === option.value)
                )
                .map((option) => option.display)
                .join(", ")}
              placeholder="Select"
              readOnly
            />
            <div className="absolute top-0 right-0 text-gray-300 w-8 pl-0.5 border-l flex justify-center items-center border-gray-200">
              <ChevronDownBtn size={5} onClick={() => {}} />
            </div>
          </div>
        );
        <MultiSelect
          onChange={onMultiSelectChange}
          options={multiSelectOptions}
          defaultValues={["1"]}
          width={72}
          customInput={customInput()}
          customListOptionsPosition={30}
        />
      ```
