import StatsIndicator from './components/StatsIndicator';
import { CursorClickIcon } from '@heroicons/react/outline'

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
    </div>
  );
}

export default App;