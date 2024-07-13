import {
  GET_ALL_GAMES,
  DETAIL_GAMES,
  ORDER_BY_NAME,
  ORDER_BY_GENRES,
  GET_GENRES,
  SEARCH_VIDEOGAME,
} from "./types/types";

const inicialState = {
  games: [],
  detail: [],
  genres: [],
  all_games: [],
};

const rootReducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        games: payload,
        all_games: payload,
      };
    case DETAIL_GAMES:
      return {
        ...state,
        detail: payload,
      };

    case ORDER_BY_NAME:
      const ordenarName =
        payload === "A-Z"
          ? state.games?.sort((a, b) => {
              if (a.name > b.name) {
                return 1; // retorna un valor positivo indicando que B sea antes que A
              }
              if (b.name > a.name) {
                return -1; //retorna un valor negativo indicando para que A sea antes que B
              }
              return 0; // no hay cambios
            })
          : state.games?.sort((a, b) => {
              if (a.name > b.name) {
                return -1; // A antes que B
              }
              if (b.name > a?.name) {
                return 1; // B antes que A
              }
              return 0; // no hay cambios
            });
      return {
        ...state,
        games: ordenarName,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };

    case ORDER_BY_GENRES:
      let nada = "";
      if (payload) {
        state.games = state.all_games;
        const aplitfiltro = state.games.filter((e) =>
          e.genres.find((e) => e.name === payload)
        );
        nada = aplitfiltro;
      }
      return {
        ...state,
        games: nada,
      };

    case SEARCH_VIDEOGAME:
      const videoGames = state.games;
      const buscadorFunct = (payload, videoGames) => {
        //me permite buscar el name en minuscula o mayuscula, o si la busqueda no es exacta
        const regex = new RegExp(payload, "i"); // busco no exacta
        return videoGames.filter((game) => regex.test(game.name));
      };
      const buscador = buscadorFunct(payload, videoGames);
      //console.log(buscador);

      if (buscador.length > 1) {
        return {
          ...state,
          games: buscador,
        };
      } else {
        return {
          ...state,
          games: state.all_games,
        };
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
