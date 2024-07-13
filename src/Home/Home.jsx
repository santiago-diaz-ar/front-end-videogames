import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";

import {
  filter_alfabetico,
  get_all_games,
  filter_genres,
  get_genres,
  busquedaVideogamesAction,
} from "../store-reducer/actions";

import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useDispatch();

  const genresApi = useSelector((state) => state.genres);

  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(get_genres());
    dispatch(get_all_games());
  }, [dispatch]);

  const ordenAlfabetico = async (event) => {
    if (event.target.value === "A-Z" || event.target.value === "Z-A") {
      dispatch(filter_alfabetico(event.target.value));
    }
  };

  const filtroGeneros = (event) => {
    dispatch(filter_genres(event.target.value));
  };

  const busquedaVideogames = (event) => {
    dispatch(busquedaVideogamesAction(event.target.value));
  };

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(!isExpanded);
    }, 700);
    return () => clearInterval(interval);
  }, [isExpanded]);

  /* const prueba = useSelector((state) => state);
  console.log(typeof prueba); */

  return (
    <>
      <div className={style.padre}>
        <div className={style.barraUno}>
          <NavLink to="/">
            <button className={style.boton}>Volver</button>
          </NavLink>
          <NavLink to="/About">
            <button className={style.botonDos}>About</button>
          </NavLink>
        </div>
        <div
          className={`my-div ${isExpanded ? "expanded" : ""}`}
          style={{
            transform: isExpanded ? "scale(1.5)" : "scale(1)",
            transition: "transform 3s ease",
          }}
        >
          <h1 className={style.texto}>VideoGames Santi</h1>
        </div>
        <div>
          <input
            type="text"
            name="Busquedas"
            id=""
            placeholder="Search Videogames"
            className={style.barraBusqueda}
            onChange={busquedaVideogames}
          />

          <NavLink to="/Form">
            <button className={style.boton}>New Videogame</button>
          </NavLink>
          <select
            name="Orden alfabetico"
            id="1"
            onChange={ordenAlfabetico}
            className={style.boton}
          >
            <option value="A-Z">Filter Alfabetico default A-Z</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>

          <select
            name="Por generos"
            id="2"
            onChange={filtroGeneros}
            className={style.boton}
          >
            {genresApi?.map((e, i) => (
              <option key={i} value={e?.name}>
                {e?.name}
              </option>
            ))}
            <option value="db">Base De Datos</option>
          </select>
        </div>

        <br />
        <br />
        <div className={style.containertarjetas}>
          {games?.map((e, i) => (
            <div key={i} className={style.tarjetas}>
              <NavLink to={`/Detail/${e?.id}`}>
                <div>{e?.name}</div>

                <img
                  src={e?.background_image}
                  alt="imagen no disponible"
                  className={style?.imagen}
                />

                <div>
                  <strong>Generos:</strong>
                  {e?.genres.map((e, i) => (
                    <div key={i}>{e?.name}</div>
                  ))}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        <div className={style.footer}>Footer en Desarrollo</div>
      </div>
    </>
  );
}
