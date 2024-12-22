import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "@/common/types";

export interface AuthInterface {
  token?: string | null;
  isAuthenticated?: boolean;
  isAuthInitialized?: boolean;
  userData?: IUser | null;
}

const initialState: AuthInterface = {
  token: null,
  isAuthenticated: false,
  isAuthInitialized: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogoutData(state: AuthInterface) {
      state.token = null;
      state.isAuthenticated = false;
    },

    setAuthInitialized(state: AuthInterface) {
      state.isAuthInitialized = true;
    },

    setCredentials(state: AuthInterface, action: PayloadAction<AuthInterface>) {
      const { token } = action.payload;
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      } else {
        state.token = null;
        state.isAuthenticated = false;
      }
    },

    setUser(state: AuthInterface, action: PayloadAction<AuthInterface>) {
      const { userData } = action.payload;
      state.userData = userData;
    },
  },
});

export const { reducer: authReducer } = authSlice;

export const getAuth = (state: RootState) => state.auth;

export const { setLogoutData, setCredentials, setAuthInitialized, setUser } =
  authSlice.actions;

export default authSlice;
