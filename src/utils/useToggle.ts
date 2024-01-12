import { useState } from "react";

export const useToggle = () => {
    const [value, setValue] = useState<boolean>(false);

    const toggle = (): void => {
        setValue((prevValue) => !prevValue);
    };

    const handleOpen = (): void => {
        setValue(true)
    }

    const handleClose = (): void => {
        setValue(false)
    }

    return { value, toggle, handleOpen, handleClose };
};