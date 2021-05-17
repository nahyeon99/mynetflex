import axios from "axios";

const api = api.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c55ab2965ce5a9595286ad2b00230001",
    language: "en-US",
  },
});

export const moviesApi = {
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
};

export const tvApi = {
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: { query: term },
    }),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
};
