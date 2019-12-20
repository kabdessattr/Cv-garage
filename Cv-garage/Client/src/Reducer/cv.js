import { GET_CV, CV_ERROR, CLEAR_CV, UPDATE_CV } from "../actions/types";

const initialState = {
  Cv: null,
  Cvs: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CV:
    case UPDATE_CV:
      return {
        ...state,
        Cv: payload,
        loading: false
      };
    case CV_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_CV:
      return {
        ...state,
        Cv: null,
        loading: false
      };

    default:
      return state;
  }
}
