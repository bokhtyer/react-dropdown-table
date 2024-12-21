"use client";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import "./ReactDropdownTable.css";
import { handleClickOutside } from "../../helpers/helper";
import React from "react";

export default function ReactDropdownTable(props) {
    const { className, children, position, button, arrow = true, customStyle = false, maxWidth = "180px" } = props;
    const [active, setActive] = useState(false);
    const buttonRef = useRef(null);
    const contentRef = useRef(null);

    const updateContentPosition = () => {
        const viewportWidth = window.innerWidth;
        if (position) {
            if (buttonRef.current && contentRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                if (viewportHeight - buttonRect.bottom < 200) {
                    contentRef.current.style.top = `${buttonRect.top - contentRef.current.offsetHeight}px`;
                    contentRef.current.classList.add("top");
                    contentRef.current.classList.remove("bottom");
                } else {
                    contentRef.current.style.top = `${buttonRect.bottom}px`;
                    contentRef.current.classList.add("bottom");
                    contentRef.current.classList.remove("top");
                }
                contentRef.current.style.left = `${buttonRect.left}px`;

                if (viewportWidth - buttonRect.right < 200) {
                    // Position content to the right edge
                    contentRef.current.style.left = `auto`;
                    contentRef.current.style.right = `0`;
                    contentRef.current.classList.add("right");
                    contentRef.current.classList.remove("left");
                } else if (buttonRect.left < 200) {
                    // Position content to the left edge
                    contentRef.current.style.left = `0`;
                    contentRef.current.style.right = `auto`;
                    contentRef.current.classList.add("left");
                    contentRef.current.classList.remove("right");
                } else {
                    // Default horizontal position
                    contentRef.current.style.left = `${buttonRect.left}px`;
                    contentRef.current.style.right = `auto`;
                    contentRef.current.classList.remove("left", "right");
                }
            }
        } else {
            if (buttonRef.current && contentRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect();

                contentRef.current.style.left = `${buttonRect.left}px`;
                contentRef.current.style.top = `${buttonRect.bottom}px`;

                if (viewportWidth - buttonRect.right < 200) {
                    // Position content to the right edge
                    contentRef.current.style.left = `auto`;
                    contentRef.current.style.right = `0`;
                    contentRef.current.classList.add("right");
                    contentRef.current.classList.remove("left");
                } else if (buttonRect.left < 200) {
                    // Position content to the left edge
                    contentRef.current.style.left = `0`;
                    contentRef.current.style.right = `auto`;
                    contentRef.current.classList.add("left");
                    contentRef.current.classList.remove("right");
                } else {
                    // Default horizontal position
                    contentRef.current.style.left = `${buttonRect.left}px`;
                    contentRef.current.style.right = `auto`;
                    contentRef.current.classList.remove("left", "right");
                }
            }
        }
    };

    useEffect(() => {
        if (active) {
            updateContentPosition();
            const handleScrollOrResize = () => {
                updateContentPosition();
            };
            window.addEventListener("scroll", handleScrollOrResize);
            window.addEventListener("resize", handleScrollOrResize);

            return () => {
                window.removeEventListener("scroll", handleScrollOrResize);
                window.removeEventListener("resize", handleScrollOrResize);
            };
        }
    }, [active]);

    useEffect(() => {
        handleClickOutside(contentRef, buttonRef, active, setActive);
    }, [active]);

    return (
        <div className={`${!customStyle ? "rdpt-dropdown" : "a"}`}>
            <div
                className={`rdpt-drop-btn ${className ? className : "ab"}`}
                ref={buttonRef}
                onClick={() => setActive(!active)}
            >
                {button}
                {arrow && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                )}
            </div>

            <div
                className={`rdpt-dropdown-content ${active ? "active" : ""}`}
                ref={contentRef}
                style={{ maxWidth: maxWidth }}
            >
                {children}
            </div>
        </div>
    );
}
