import HTTP from "utils/http.service";

// export const getSomeData = () => async dispatch => {
// 	const res = await HTTP.get('/some-api-route');
// 	dispatch({
// 		type: 'GET_SOME_DATA',
// 		payload: res.data
// 	});
// };

export const getContactAction = () => {
  return (dispatch) => {
    return HTTP({
      method: "GET",
      url: "/users",
      auth: false,
    }).then((res) => {
      if (!!res.data.status) {
        dispatch({
          type: "CONTACT_DATA_SUCCESS",
          payload: res.data,
        });
      } else {
        dispatch({
          type: "CONTACT_DATA_FAILURE",
          payload: res.data,
        });
      }
    });
  };
};

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
