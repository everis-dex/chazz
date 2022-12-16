import React from "react";

import "./footerLinks.scss";

interface EmailProps {
    email: string
}

export const LinkedEmail = ({ email }: EmailProps) => {

    const mailto: string = `mailto:${email}`;

    return (
        <p className="email">
            <a className="footerLink" href={mailto}>{email}</a>
        </p>
    )
}

