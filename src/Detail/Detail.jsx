import React from "react";

import style from "./Detail.module.css";

import { useParams, NavLink } from "react-router-dom";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { detail_games } from "../store-reducer/actions";

export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(detail_games(id));
  });

  const detailStore = useSelector((state) => state.detail).data;

  /* const detailStoreOFFline = {
    name: "Modo Offline",
    parent_platforms: [{ platform: { name: "Xbox" } }],
    released: "2",
    ratings_count: "10",
    genres: [{ name: "AMOR" }],
    description:
      "Solo modo off line soy un hacker de primera todo en js son objetos",
  }; */

  return (
    <div className={style.Padre}>
      <div className={style.one}>
        <br />
        <h2>{detailStore?.name}</h2>
        <img
          src={detailStore?.background_image}
          alt="img no disponible"
          className={style.imagen}
        />
        <NavLink to={"/Home"}>
          <button className={style.volver}>Volver</button>
        </NavLink>
      </div>
      <div className={style.two}>
        <br />
        <div>
          <strong>Plataformas:</strong>
          {detailStore?.parent_platforms.map((e, i) => (
            <div key={i}>{e?.platform.name}</div>
          ))}
        </div>
        <br />
        <strong>fecha de lanzamiento:</strong> {detailStore?.released}
        <br />
        <br />
        <strong>rating:</strong>
        {detailStore?.ratings_count}
        <br />
        <br />
        <strong> Generos:</strong>
        {detailStore?.genres.map((e, i) => (
          <li key={i}>{e?.name}</li>
        ))}
        <br />
        <br />
      </div>
    </div>
  );
}
