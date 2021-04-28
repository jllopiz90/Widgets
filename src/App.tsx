import StatsIndicator from './components/StatsIndicator';
import { CursorClickIcon } from '@heroicons/react/outline'
import RadioGroup from './components/RadioGroup';

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

function App() {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-gray-500">
      <span className="text-green-400 text-2xl font-bold">Widgets examples</span>
      <div className="mt-10 w-64">
        <StatsIndicator
          name="Total Subscribers"
          stat="71,897"
          icon={CursorClickIcon}
          iconBGColorClass="bg-green-500"
          trend={{change: '14%', type: 'increase'}}
         />
      </div>
      <div className="mt-10 w-80">
        <RadioGroup 
          elements={plans}
          srOnlyText="Server size"
        />
      </div>
    </div>
  );
}

export default App;