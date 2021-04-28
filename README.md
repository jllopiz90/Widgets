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
