import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useContext(Context)
    const [data, setData] = useState({})

    useEffect(() => { }, [data.full_name, data.address, data.phone, data.email])

    return (
        <div>
            <h2 className="m-2 d-flex justify-content-center">Aquí debería agregar contactos nuevos</h2>
            <br />
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-10 d-flex justify-content-center">
                        <h5>Nombre
                            <br />
                            <input id="add-cont" type="text" className="m-3 p-2" placeholder="Nombre" name="nombre" onChange={(e) => { setData({ ...data, full_name: e.target.value }) }} />
                        </h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 d-flex justify-content-center">
                        <h5>Direccion
                            <br />
                            <input id="add-cont" type="text" placeholder="Direccion" className="m-3 p-2" name="direccion" onChange={(e) => { setData({ ...data, address: e.target.value }) }} />
                        </h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 d-flex justify-content-center">
                        <h5>Número
                            <br />
                            <input id="add-cont" type="number" placeholder="Número" className="m-3 p-2" name="tlf" onChange={(e) => { setData({ ...data, phone: e.target.value }) }} />
                        </h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 d-flex justify-content-center">
                        <h5>Correo
                            <br />
                            <input id="add-cont" type="text" placeholder="Correo" className="m-3 p-2" name="correo" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                        </h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-10 d-flex justify-content-center">
                        <button id="add-cont" type="button" className="bg-primary text-light border-0 rounded p-2 m-2" onClick={() => {
                            actions.addContact(data)
                        }}>Save</button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <Link to="/" id="link-add">Regresar a lista de contactos</Link>
                    </div>
                </div>
            </div>
        </div >)
}

export default AddContact;