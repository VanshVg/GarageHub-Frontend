import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./slices/authSlice";
import { signupReducer } from "./slices/signupSlice";

const persistConfig = {
  key: "Garage Hub",
  storage,
  whitelist: ["auth", "signup"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
});

export default persistReducer(persistConfig, rootReducer);
