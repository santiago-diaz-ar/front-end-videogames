import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Landing/Landing.module.css";
import { useEffect, useState } from "react";
/* import { useDispatch } from "react-redux";

import { get_all_games } from "../store-reducer/actions"; */

export default function Landing_Page() {
  /* const dispatch = useDispatch();

  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    if (loadingData === false) {
      setLoadingData(true);
      dispatch(get_all_games());
    }
  }, [dispatch, loadingData]); */

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(!isExpanded);
    }, 700);
    return () => clearInterval(interval);
  }, [isExpanded]);
  return (
    <>
      <div className={style.padre}>
        <br />
        <h1 className={style.texto}>💰 Videogames Santi 💰</h1>

        <div
          className={`my-div ${isExpanded ? "expanded" : ""}`}
          style={{
            transform: isExpanded ? "scale(1.5)" : "scale(1)",
            transition: "transform 3s ease",
          }}
        >
          <strong className={style.texto}>
            💲 Obtener los dos primeros meses Gratis💲
          </strong>
        </div>
        <br />
        <div className={style.contenedorBotones}>
          <NavLink to="/Home">
            <button className={style.boton}>iniciar Sesion </button>
          </NavLink>

          <button className={style.boton}>Registrate</button>

          <button className={style.boton}>Google💯</button>
        </div>
      </div>
    </>
  );
}
