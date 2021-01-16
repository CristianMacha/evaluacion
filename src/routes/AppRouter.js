import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from '../components/dashboard/Dashboard';
import { Medico } from '../components/medico/Medico';
import { Paciente } from '../components/paciente/Paciente';
import { Navbar } from '../components/ui/Navbar';
import { Sidebar } from '../components/ui/Sidebar';
import { Citas } from '../components/cita/Citas';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10 py-2 px-5">
                        <Switch>
                            <Route exact path="/dashboard" component={Dashboard}></Route>
                            <Route
                                exact
                                path="/medico"
                                component={Medico}
                            ></Route>
                            <Route
                                exact
                                path="/paciente"
                                component={Paciente}
                            ></Route>
                            <Route
                                exact
                                path="/citas"
                                component={Citas}
                            ></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
};
