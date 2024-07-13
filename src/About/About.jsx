import React from "react";
import { NavLink } from "react-router-dom";

import style from "./About.module.css";

export default function SobreMi() {
  return (
    <div className={style.Principal}>
      <br />
      <NavLink to="/Home">
        <button className={style.volver}>Volver</button>
      </NavLink>
      <br />
      <div>Develop encargado de toda la pagina:</div>
      <strong>Santiago Diaz Arcila</strong>
      <br />
      <div className={style.ContainerColumnas}>
        <div className={style.columnaIzquierda}>
          <div className={style.ContenedorImagen}></div>
        </div>
        <div className={style.columnaDerecha}>
          <br />
          <div>alias:</div>
          <br />
          <div>experiencia:</div>
          <br />
          <div>areas en las cuales se desarrollo mejor:</div>
          <br />
          <div>edad:</div>
          <br />
          <div>correo electronico:</div>
          <br />
          <div>credenciales:</div>
          <br />
          <div>es el mejor de todos?:</div>
          <br />
          <div>mejor lenguaje conocido:</div>
          <br />
        </div>
      </div>
      <br />
      <div>Lenguajes utilizados para la app Videogames:</div>
      <strong>Javascript, React, Node, Sql, Sequelize</strong>
      <br />
      <button className={style.volver}>Ir A facebook De develop</button>
      <br />
    </div>
  );
}
