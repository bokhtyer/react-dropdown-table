import React from "react";

const DropdownArrow = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke={"currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform ${className}`}
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
};

export default DropdownArrow;
