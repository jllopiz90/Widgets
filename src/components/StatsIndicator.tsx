import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { classNames } from '../utils/utils';
interface Trend {
  type: "increase" | "decrease";
  change: string;
}

interface StatsIndicatorProps {
  stat: string;
  name: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  iconBGColorClass?: string;
  iconColor?: string;
  trend?: Trend;
  change?: string;
}

const StatsIndicator = ({ name, stat, icon: Icon, trend, iconColor = '#ffffff', iconBGColorClass = "bg-indigo-500" }: StatsIndicatorProps) => {
  return (
    <div className="py-5 relative bg-white px-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
      <dt>
        {!!Icon && <div className={classNames(iconBGColorClass, "absolute rounded-md p-3")}><Icon stroke={iconColor} className="h-6 w-6" aria-hidden="true" /></div>}
        <p className={classNames(!!Icon ? "ml-16" : "", "text-sm font-medium text-gray-500 truncate")}>
          {name}
        </p>
      </dt>
      <dd className={classNames(!!Icon ? "ml-16" : "", "flex items-baseline")}>
        <p className="text-2xl font-semibold text-gray-900">{stat}</p>
        {trend && (
          <p
            className={classNames(
              trend.type === "increase" ? "text-green-600" : "text-red-600",
              "ml-2 flex items-baseline text-sm font-semibold"
            )}
          >
            {trend.type === "increase" ? (
              <ArrowSmUpIcon
                className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            ) : (
              <ArrowSmDownIcon
                className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            )}

            <span className="sr-only">
              {trend.type === "increase" ? "Increased" : "Decreased"} by
            </span>
            {trend.change}
          </p>
        )}
      </dd>
    </div>
  );
};

export default StatsIndicator;
