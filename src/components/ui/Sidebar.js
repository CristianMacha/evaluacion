import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div>
            <div className="list-group rounded-0">
                <NavLink
                    to="/dashboard"
                    className="list-group-item list-group-item-action border-0"
                    activeClassName="active"
                    aria-current="true"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/paciente"
                    className="list-group-item list-group-item-action border-0"
                    activeClassName="active"
                    aria-current="true"
                >
                    Paciente
                </NavLink>
                <NavLink
                    to="/citas"
                    className="list-group-item list-group-item-action border-0"
                    activeClassName="active"
                    aria-current="true"
                >
                    citas
                </NavLink>
                <NavLink
                    to="/medico"
                    className="list-group-item list-group-item-action border-0"
                    activeClassName="active"
                    aria-current="true"
                >
                    medico
                </NavLink>
            </div>
        </div>
    );
};
