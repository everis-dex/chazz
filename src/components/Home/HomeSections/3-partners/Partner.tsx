import React from "react";

import { IPartner } from "../../../../interfaces/interfaces";

import "./Partners.styles.scss";

export const Partner = ({ website, logo, name, scale }: IPartner) => {

    const calc: number = 100 * parseFloat(scale);
    const percentage: string = calc > 0 ? calc.toString().concat("%") : "100%";

    return (
        <a href={website}>
            <img className="partner-logo" src={logo} alt={name} width={percentage} />
        </a>
    );
};
