const initialState = {
    contacts: [],
  };
  
  const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CONTACT_DATA":
        state = {
          ...state,
          contacts: action.payload,
        };
        break;
    }
  
    return state;
  };
  export default contactsReducer;
  