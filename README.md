# Introduction UI Widgets Components

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
<img width="292" alt="Screen Shot 2021-04-28 at 5 44 48 PM" src="https://user-images.githubusercontent.com/17462829/116476592-6fff1880-a849-11eb-8694-dc0a440f3ded.png">
