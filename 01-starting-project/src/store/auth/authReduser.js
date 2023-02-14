import React from "react";

export const authActionTypes = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const initialState = {
  email: "",
  isAuthorised: false,
};

export const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAuthorised: true,
      };

    case authActionTypes.LOG_OUT:
      return initialState;

    default:
      return state;
  }
};

export default authReduser;
