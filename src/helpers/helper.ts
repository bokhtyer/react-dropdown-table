import { Dispatch, SetStateAction } from "react";

export const handleClickOutside = (
    ref: React.RefObject<HTMLDivElement | null>,
    buttonRef: React.RefObject<HTMLDivElement | HTMLButtonElement | null>,
    opebox: boolean,
    setOpenBox: Dispatch<SetStateAction<boolean>>
) => {
    const handleClickOutside = (event: MouseEvent) => {
        const profileBox = ref?.current;
        const button = buttonRef?.current;

        if (
            opebox &&
            profileBox &&
            !profileBox.contains(event.target as Node) &&
            button &&
            !button.contains(event.target as Node)
        ) {
            setOpenBox(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
};
