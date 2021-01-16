import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand m-2" to="/dashboard">
                Evaluacion
            </NavLink>
        </nav>
    );
};
