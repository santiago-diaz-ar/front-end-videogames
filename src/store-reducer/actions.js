import axios from "axios";

import {
  GET_ALL_GAMES,
  DETAIL_GAMES,
  GET_GENRES,
  ORDER_BY_NAME,
  ORDER_BY_GENRES,
  SEARCH_VIDEOGAME,
} from "./types/types";

export const get_all_games = () => {
  return async function (dispatch) {
    const datos = (
      await axios.get(
        "https://back-end-videogames-jsmh.onrender.com/videogames"
      )
    ).data.results;
    return dispatch({ type: GET_ALL_GAMES, payload: datos });
  };
};

export const filter_alfabetico = (orden) => {
  return async function (dispatch) {
    return dispatch({ type: ORDER_BY_NAME, payload: orden });
  };
};

export const detail_games = (id) => {
  return async function (dispatch) {
    const datos = await axios(
      `https://back-end-videogames-jsmh.onrender.com/videogames/${id}`
    );
    return dispatch({ type: DETAIL_GAMES, payload: datos });
  };
};

export const get_genres = () => {
  return async function (dispatch) {
    const data = await axios.get(
      "https://back-end-videogames-jsmh.onrender.com/genres"
    );
    const genres = data.data;
    return dispatch({ type: GET_GENRES, payload: genres });
  };
};

export const filter_genres = (filtro) => {
  return async function (dispatch) {
    return dispatch({ type: ORDER_BY_GENRES, payload: filtro });
  };
};

export const busquedaVideogamesAction = (busqueda) => {
  return async function (dispatch) {
    return dispatch({ type: SEARCH_VIDEOGAME, payload: busqueda });
  };
};
