import { useState } from "react";
import StatsIndicator from "./components/StatsIndicator";
import RadioGroup from "./components/RadioGroup";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
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

function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-500">
      <span className="text-green-400 text-2xl font-bold">
        Widgets examples
      </span>
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
    </div>
  );
}

export default App;
