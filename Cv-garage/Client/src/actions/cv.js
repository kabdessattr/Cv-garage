import axios from "axios";
import { setAlert } from "./alert";
import { GET_CV, CV_ERROR, UPDATE_CV, CLEAR_CV, DELETE_ACCOUNT } from "./types";

// Get current user's profile

export const getCurrentCv = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles/me");

    dispatch({ type: GET_CV, payload: res.data });
  } catch (err) {
    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or Update Cv

export const createCv = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    const res = await axios.post("/api/profiles", formData, config);
    dispatch({ type: GET_CV, payload: res.data });

    dispatch(setAlert(edit ? "Resume Updated" : "Resume Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// add experience

export const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    const res = await axios.put(
      "/api/profiles/professionalexperience",
      formData,
      config
    );
    dispatch({ type: UPDATE_CV, payload: res.data });

    dispatch(setAlert("Professional Experience Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// add Education

export const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    const res = await axios.put("/api/profiles/academicInfo", formData, config);
    dispatch({ type: UPDATE_CV, payload: res.data });

    dispatch(setAlert("Academic Experience Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// add Project

export const addProject = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    const res = await axios.put("/api/profiles/projectsWorked", formData, config);
    dispatch({ type: UPDATE_CV, payload: res.data });

    dispatch(setAlert("Project Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// add Certification

export const addCertification = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };

    const res = await axios.put("/api/profiles/Certifications", formData, config);
    dispatch({ type: UPDATE_CV, payload: res.data });

    dispatch(setAlert("Certification Added", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// delete experience

export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profiles/professionalexperience/${id}`);

    dispatch({
      type: UPDATE_CV,
      payload: res.data
    });
    dispatch(setAlert("Experience Deleted", "success"));


  } catch (err) {
    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}


// delete education

export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profiles/academicInfo/${id}`);

    dispatch({
      type: UPDATE_CV,
      payload: res.data
    });
    dispatch(setAlert("Academic Experience Deleted", "success"));


  } catch (err) {
    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// delete Project

export const deleteProject = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profiles/projectsWorked/${id}`);

    dispatch({
      type: UPDATE_CV,
      payload: res.data
    });
    dispatch(setAlert("Project Deleted", "success"));


  } catch (err) {
    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// delete Certification

export const deleteCertification = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/profiles/Certifications/${id}`);

    dispatch({
      type: UPDATE_CV,
      payload: res.data
    });
    dispatch(setAlert("Certification Deleted", "success"));


  } catch (err) {
    dispatch({
      type: CV_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
}

// delete account and profile


export const deleteAccount = id => async dispatch => {
  if(window.confirm('Are you sure? You may regret this!')) {
    try {
      const res = await axios.delete('/api/profiles/');
  
      dispatch({
        type: CLEAR_CV,
      });

      dispatch({
        type: DELETE_ACCOUNT,
      });

      dispatch(setAlert("Your account has been successfully deleted", "success"));
  
  
    } catch (err) {
      dispatch({
        type: CV_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
  

}