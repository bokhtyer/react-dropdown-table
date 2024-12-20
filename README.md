# ReactDropdownTable

A customizable React dropdown table component with dynamic positioning and optional arrow icons.

## Installation

To install the component, use npm:

```bash
npm install react-dropdown-table
# or
yarn add react-dropdown-table
```

# Usage

Here’s how to use the ReactDropdownTable component in your React project:

## Quick Start

```jsx
import ReactDropdownTable from "react-dropdown-table";

function App() {
    return (
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
        </ReactDropdownTable>
    );
}
```

export default App;
Props Table
Here is a list of properties supported by the component:

Property Type Default Description
button string Required Text to display on the button that toggles the dropdown.
position boolean true If true, the dropdown adjusts position (top/bottom) based on available space.
arrow boolean true If true, an arrow icon will be displayed next to the button text.
children ReactNode Required The content to display inside the dropdown, such as a list or other elements.
