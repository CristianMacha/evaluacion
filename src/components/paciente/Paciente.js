import React from 'react'
import { useForm } from '../../hooks/useForm';
import { firebase } from '../../firebase';
import shortid from 'shortid';

export const Paciente = () => {
    const [formValues, handleInputChange] = useForm({
        id: '',
        nombres: '',
        edad: 0,
        documento: '',
        telefono: 0,
    });

    let listPaciente = [];

    const { nombres, edad, documento, telefono } = formValues;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const database = firebase.database();
        await database.ref('paciente/' + shortid.generate()).set(formValues);
        console.log(formValues);
    };

    const getPacientes = async () => {
        const database = firebase.database();
        database.ref('paciente/').on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            listPaciente = Object.values(data);
        });
    };

    const selectPaciente = (e) => {
        // handleInputChange(values);
    }

    getPacientes();

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
                                <th scope="col">Telefono</th>
                                <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listPaciente.map((item) => (
                                <tr key={item.id}>
                                    <th>{item.nombres}</th>
                                    <th>{item.edad}</th>
                                    <th>{item.documento}</th>
                                    <th>{item.telefono}</th>
                                    <th>
                                        <button
                                            onClick={selectPaciente(item)}
                                            className="btn btn-primary mx-1"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Editar
                                        </button>
                                        <button className="btn btn-danger">Eliminar</button>
                                    </th>
                                </tr>
                            ))}
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
                                Paciente
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label>Nombre</label>
                                    <input
                                        className="form-control"
                                        name="nombres"
                                        value={nombres}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div className="mb-3">
                                    <label>Edad</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="edad"
                                        value={edad}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div className="mb-3">
                                    <label>Documento</label>
                                    <input
                                        className="form-control"
                                        name="documento"
                                        value={documento}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div className="mb-3">
                                    <label>Telefono+</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="telefono"
                                        value={telefono}
                                        onChange={handleInputChange}
                                    ></input>
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
                            <button
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
