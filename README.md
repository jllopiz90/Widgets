# Introduction DataGrid Component

A small collection of UI widgets created with react, typescript and tailwindcss.

## Widgets

1. `StatsIndicator`: Component to show a given stat, may display an icon or not.\
    *Props:

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
    <img width="325" alt="Screen Shot 2021-04-28 at 5 42 40 PM" src="https://user-images.githubusercontent.com/17462829/116476375-244c6f00-a849-11eb-84a2-e0c8e42580a2.png">
