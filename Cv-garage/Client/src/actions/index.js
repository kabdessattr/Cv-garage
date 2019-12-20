import { GET_CV, LOAD_CV } from "./types";
import axios from "axios";

export const getCV = () => dispatch => {
  dispatch({ type: LOAD_CV });
  axios
    .get("/cv-garage/cv1")
    .then(res => dispatch({ type: GET_CV, payload: res.data }))
    .catch(err => console.log(err));
};
export const addCV = (newCv, history) => dispatch => {
  axios
    .post(`/cv-garage/cv1`, newCv)

    .then(() => getCV())
    .catch(err => console.log(err));
};