export const handleClickOutside = (ref, buttonRef, opebox, setOpenBox) => {
    const handleClickOutside = (event) => {
        const profileBox = ref?.current;
        const button = buttonRef?.current;

        if (opebox && profileBox && !profileBox.contains(event.target) && button && !button.contains(event.target)) {
            setOpenBox(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
};
