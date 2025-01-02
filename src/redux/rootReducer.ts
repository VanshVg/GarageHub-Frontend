import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./slices/authSlice";
import { signupReducer } from "./slices/signupSlice";
import { toastReducer } from "./slices/toastSlice";
import { sidebarReducer } from "./slices/sidebarSlice";

const persistConfig = {
  key: "Garage Hub",
  storage,
  whitelist: ["auth", "signup"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  toast: toastReducer,
  sidebar: sidebarReducer,
});

export default persistReducer(persistConfig, rootReducer);
