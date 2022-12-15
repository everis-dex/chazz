import React from "react";
import { Link } from "react-router-dom";

import { routesInfo } from '../../../constants';

import "../nav.scss";


export const DesktopMenu = () => {

    return (
        <div className="nav">
            <ul>
                {routesInfo.map(route => {
                    return (
                        <li key={route.id}>
                            <Link to={route.route}>{route.name}</Link>{" "}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};