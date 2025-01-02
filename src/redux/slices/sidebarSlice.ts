import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SidebarInterface {
  isSidebarOpen: boolean;
}

const initialState: SidebarInterface = {
  isSidebarOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state: SidebarInterface) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { reducer: sidebarReducer } = sidebarSlice;

export const getSidebar = (state: RootState) => state.sidebar;

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice;
