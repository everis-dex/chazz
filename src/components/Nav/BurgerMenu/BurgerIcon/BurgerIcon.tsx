import React, { useEffect, useState } from "react";

import "../../Nav.scss";

type Props = {
    isOpen: boolean;
    toggleMenu: (event: React.MouseEvent) => void;
    color: string;
}

export const BurgerIcon = ({ isOpen, toggleMenu, color }: Props) => {

    const [iconColor, setIconColor] = useState<string>("");
    useEffect(() => {
        if (color == "white") { // En la home
            setIconColor("white");
        }
        if (color == "black") {    // En otra página
            if (!isOpen) {   // Si no se ha abierto el menú
                setIconColor("black");
            } else {    // Si se ha abierto el menú
                setIconColor("white");
            }
        }
    }, [isOpen]);

    console.log({ iconColor });

    return (
        <>
            <input id="open-close" name="open-close" type="checkbox" value="" />
            <label htmlFor="open-close"
                className={(iconColor === "white") ? "toggle-button" : "toggle-button-pages"}
                onClick={toggleMenu}
            />
        </>
    )
};
