import HTTP from "utils/http.service";

export const getContacts = () => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: "/users",
    }).then((res) => {
      dispatch({
        type: "GET_CONTACT_DATA",
        payload: res.data,
      });
    });
  };
};

export const getContact = (id) => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: `/users/${id}`,
    }).then((res) => {
      dispatch({
        type: "GET_SINGLE_CONTACT_DATA",
        payload: res.data,
      });
    });
  };
};


export const addContact = (userData) => {
  return (dispatch) => {
    return HTTP({
      method: "POST",
      url: "/users",
      data:userData,
    }).then(() => {
      dispatch({
        type: "ADD_CONTACT_DATA",
        payload:userData,
      });
    });
  };
};


export const deleteContact = (id) => {
  return (dispatch) => {
    return HTTP({
      method: "DELETE",
      url: `/users/${id}`,
    }).then((res) => {
      dispatch({
        type: "DELETE_CONTACT_DATA",
        payload: res.data,
      });
    });
  };
};
