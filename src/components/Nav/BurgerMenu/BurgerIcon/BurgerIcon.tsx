import React from "react";

import "../../Nav.scss";

type Props = {
    isOpen: boolean;
    toggleMenu: (event: React.MouseEvent) => void;
    color: string;
}

export const BurgerIcon = ({ isOpen, toggleMenu, color }: Props) => {

    return (
        <>
            <input id="open-close" name="open-close" type="checkbox" value="" />
            <label htmlFor="open-close"
                className={color === "white" ? "toggle-button" : "toggle-button-pages"}
                onClick={toggleMenu}
            />
        </>
    )
};
