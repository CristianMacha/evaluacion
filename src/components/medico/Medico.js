import React, { useState } from 'react';

export const Medico = () => {
    const [form, setForm] = useState({
        nombre: '',
        edad: 0,
        documento: '',
        ingreso: '',
        especialidad: ''
    })

    const handleSubmit = () => {
        alert(form)
    }

    return (
        <div>
            <h4>Medicos</h4>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-11">
                            <input
                                className="form-control"
                                placeholder="Buscar"
                            ></input>
                        </div>
                        <div className="col-1">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Nuevo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <table className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Nombres</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Ingreso</th>
                                <th scope="col">Especialidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Medico
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label>Nombre</label>
                                    <input className="form-control" value={form.nombre}></input>
                                </div>
                                <div className="mb-3">
                                    <label>Edad</label>
                                    <input type="number" className="form-control" value={form.edad}></input>
                                </div>
                                <div className="mb-3">
                                    <label>Documento</label>
                                    <input className="form-control" value={form.documento}></input>
                                </div>
                                <div className="mb-3">
                                    <label>ingreso</label>
                                    <input type="date" className="form-control" value={form.ingreso}></input>
                                </div>
                                <div className="mb-3">
                                    <label>Especialidad</label>
                                    <input className="form-control" value={form.especialidad}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
