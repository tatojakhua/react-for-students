import jwtDecode from "jwt-decode";
import { AUTHENTICATE, LOG_IN, LOG_OUT } from "./constants";
import { toggleLocalStorage } from "../../utils/jwt";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOG_IN: {
      const { token } = payload;
      const user = jwtDecode(token);
      toggleLocalStorage(token);
      return { isAuthenticated: true, user };
    }
    case LOG_OUT: {
      toggleLocalStorage();
      return { isAuthenticated: false, user: null };
    }
    case AUTHENTICATE: {
      const user = jwtDecode(payload);
      return { isAuthenticated: true, user };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
