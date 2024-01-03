import React from "react";

export const initialMovieListState = {
  data: [],
  totalPages: 0,
  totalResults: 0,
  page: 0,
  isLoading: false,
  isSuccess: false,
  error: undefined,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults,
        page: action.payload.page,
        loading: false,
        error: null,
        success: true,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
