import { useState, useEffect } from "react";
import StatsIndicator from "./components/StatsIndicator";
import RadioGroup from "./components/RadioGroup";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
import Chip from "./components/Chip";
import MultiSelect, { OptionValue } from "./components/MultiSelect";
import { CursorClickIcon } from "@heroicons/react/outline";

const plans = [
  {
    label: "Startup",
    description: (
      <>
        <span>12GB / 6 CPUs</span> <span aria-hidden="true">&middot;</span>{" "}
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

function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedValues, setSelectedValues] = useState<OptionValue[]>(['1']);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  const onMultiSelectChange = (values: OptionValue[]) => setSelectedValues(values);

  useEffect(() => {
    console.log('selectedValues', selectedValues)
  }, [selectedValues]);

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-500">
      <span className="text-green-400 text-2xl font-bold">
        Widgets examples
      </span>
      <div className="mt-10 w-80 justify-center flex">
        <MultiSelect onChange={onMultiSelectChange} options={multiSelectOptions} defaultValues={['1']} width={72} />
      </div>
      <div className="mt-10 w-64">
        <Chip label="test" value="test" onClear={() => console.log('cleared')} onClick={() => console.log('clicked')}/>
      </div>
      <div className="mt-10 w-64">
        <StatsIndicator
          name="Total Subscribers"
          stat="71,897"
          icon={CursorClickIcon}
          iconBGColorClass="bg-green-500"
          trend={{ change: "14%", type: "increase" }}
        />
      </div>
      <div className="mt-10 w-80">
        <RadioGroup elements={plans} srOnlyText="Server size" />
      </div>
      <div className="mt-10 w-80 justify-center flex">
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
            acceptText="Ok do it!"
            onAccept={closeModal}
          />
        )}
      </div>
      <div className="mt-10 w-80 justify-center flex">
        <Pagination page={page} total={9} setPage={setPage} />
      </div>
      {/* Example for multi select with no bottom space available */}
      {/* <div className="mt-10 w-80 justify-center flex">
        <MultiSelect onChange={onMultiSelectChange} options={multiSelectOptions} defaultValues={['1']} width={80} />
      </div> */}
    </div>
  );
}

export default App;
