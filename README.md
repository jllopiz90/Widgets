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

    *Example:
    
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
    *Props:

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

    *Example:

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
