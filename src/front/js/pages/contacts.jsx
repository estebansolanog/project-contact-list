import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Pencil } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";
import { GeoAltFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { EnvelopeFill } from "react-bootstrap-icons";

const Contactos = () => {
    const { store, actions } = useContext(Context)
    const [nombre, setNombre] = useState("")
    const [direccion, setDireccion] = useState("")
    const [numero, setNumero] = useState("")
    const [correo, setCorreo] = useState("")

    useEffect(() => { }, [store.listaContactos, nombre, direccion, numero, correo])

    return (<div>
        <h2 className="m-2">Contactos</h2>
        <br />
        <Link to="/add-contact" className="d-flex justify-content-end" id="bnt-swap-addContact">
            <button className="m-2 mx-2 p-2 border-0 rounded bg-success text-light">
                <h5>Añadir contacto</h5>
            </button>
        </Link>
        <br />
        <div className="container-fluid">
            <div className="m-2 row row-cols-4 d-flex-inline justifiy-content-evenly">
                <div className="col p-2">
                    <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="col p-2">
                    <input type="text" placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)} />
                </div>
                <div className="col p-2">
                    <input type="text" placeholder="Número" onChange={(e) => setNumero(e.target.value)} />
                </div>
                <div className="col p-2">
                    <input type="text" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)} />
                </div>
            </div>
        </div>
        <br />
        <div>
            {store.listaContactos && store.listaContactos.length > 0 ? <>
                {store.listaContactos.map((item, index) => {
                    return (
                        <div className="container-fluid">
                            <div className="card" key={index}>
                                <div className="row g-0 d-flex-inline">
                                    <div className="col-md-3 d-flex m-3">
                                        <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"
                                            class="img-fluid rounded-circle"
                                            alt="profile-pic"
                                            id="profile-pic">

                                        </img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body d-flex justify-content-between">
                                            <div className="d-flex-inline-block">
                                                <h4 className="card-title">{item.full_name}</h4>
                                                <h5 className="card-title text-muted"><GeoAltFill /> {item.address}</h5>
                                                <h5 className="card-title text-muted"><TelephoneFill /> {item.phone}</h5>
                                                <h5 className="card-title text-muted"><EnvelopeFill /> {item.email}</h5>
                                            </div>
                                            <div className="d-flex-inline mx-3">
                                                <button
                                                    className="btn m-1"
                                                    button="button"
                                                    onClick={() => {
                                                        if (nombre == "" || direccion == "" || numero == "" || correo == "") {
                                                            alert("Agregue datos")
                                                            return
                                                        }
                                                        actions.editContact(index, nombre, direccion, numero, correo)
                                                    }}
                                                >
                                                    <Pencil className="fs-5" />
                                                </button>

                                                <button
                                                    className="btn  m-1"
                                                    type="button"
                                                    onClick={() => { actions.deleteContact(index) }}>
                                                    <TrashFill className="fs-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </> : <>No hay contactos</>}
        </div>
    </div>)
}

export default Contactos;