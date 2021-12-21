import React from "react";
import "./CSS/home.scss";
// import { ReactComponent as Ubank } from "../../assets/ubank.svg";
import Ubank from "../../assets/JSX/Ubank.jsx";
import GitHub from "../../assets/JSX/GitHub.jsx";
import Google from "../../assets/google.png";

export default function Home() {
  return (
    <div id="home" className="d-flex position-absolute m-0 p-0 h-100 w-100">
      <div className="d-flex position-relative logo">
        <Ubank color="#ffffff" size="350"/>
      </div>
      <div className="d-flex content">
        <div className="d-flex flex-direction-row justify-content-between">
          <Ubank size="40" />
          <a href="/login">Iniciar sesión</a>
        </div>
        <div>
          <p className="title">Tu banco <br/> Una app</p>
          <p className="subtitle">Únete a Ubank y empieza a generar <br/> ingresos desde tu hogar</p>
        </div>
        <div className="d-flex flex-column btn-group">
          <button className="filled">Registrarse con email</button>
          <span>o</span>
          <button className="outlined">
            <div className="google">
              <img src={Google}/>
              <span>Registrarse con Google</span>
            </div>
          </button>
          <button className="outlined">
            <GitHub size="24" color="#fafafa" />
            <span>Registrarse con GitHub</span>
          </button>
        </div>
      </div>           
    </div>
  );
}