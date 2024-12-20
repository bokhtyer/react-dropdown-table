# ReactDropdownTable

A customizable React dropdown table component with dynamic positioning and optional arrow icons.

## Installation

To install the component, use npm:

```bash
npm install react-dropdown-table
```

```bash
yarn add react-dropdown-table
```

# Usage

Here’s how to use the ReactDropdownTable component in your React project:

## Quick Start

```jsx
import ReactDropdownTable from "react-dropdown-table";

<ReactDropdownTable button={"Click Me"} position={true} arrow={true}>
    <ul>
        <li>Hello World</li>
        <li>
            <a href="#">Profile</a>
        </li>
        <li>
            <a href="#">Purchase History</a>
        </li>
        <li>
            <a href="#">Logout</a>
        </li>
    </ul>
</ReactDropdownTable>;
```

# Create Custom Button

```jsx
const handleCustomButton = () => {
    return <div className="your-custom-button"> Click Here </div>;
};

<ReactDropdownTable button={handleCustomButton()} position={true} arrow={true}>
    {/* Your Dropdown Item */}
</ReactDropdownTable>;
```

# Examples

## 1.Default

Basic usage with default settings:

```jsx
<ReactDropdownTable button="Menu">
    <ul>
        <li>Option 1</li>
        <li>Option 2</li>
    </ul>
</ReactDropdownTable>
```

## 2. Dropdown Without Arrow

To disable the arrow icon, set `arrow={false}`:

```jsx
<ReactDropdownTable button="Click Me" arrow={false}>
    <ul>
        <li>Profile</li>
        <li>Settings</li>
    </ul>
</ReactDropdownTable>
```

## 3. Dropdown with Dynamic Positioning

The dropdown adjusts its position based on available screen space:

```jsx
<ReactDropdownTable button="Dynamic Position" position={true}>
    <ul>
        <li>Top</li>
        <li>Bottom</li>
    </ul>
</ReactDropdownTable>
```

# Properties

| Property      | Type                   | Default           | Description                                                                     |
| ------------- | ---------------------- | ----------------- | ------------------------------------------------------------------------------- |
| `button`      | `ReactElement, string` | `Required`        | Text to display on the button that toggles the dropdown.                        |
| `position`    | `boolean`              | `true`            | If `true`, the dropdown adjusts position (top/bottom) based on available space. |
| `arrow`       | `boolean`              | `true`            | If `true`, an arrow icon will be displayed next to the button text.             |
| `children`    | `ReactNode`            | `Required`        | The content to display inside the dropdown, such as a list or other elements.   |
| `customStyle` | `boolean`              | `false`           | If `true` then not working default css                                          |
| `className`   | `string`               | `your-class-name` | You can pass your custom class and style update                                 |
| `maxWidth`    | `string`               | `180px`           | You can customize dropdown item width                                           |
