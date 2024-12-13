import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IToast {
  message: string | null;
  type: string | null;
}

const initialState: IToast = {
  message: null,
  type: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    ToastShow: (state: IToast, action: PayloadAction<IToast>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const toastSelector = (state: { toast: IToast }) => {
  return { message: state.toast.message, type: state.toast.type };
};

export const { reducer: toastReducer } = toastSlice;

export const { ToastShow } = toastSlice.actions;

export default toastSlice;
