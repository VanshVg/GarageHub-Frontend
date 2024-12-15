import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import { VITE_APP_BACKEND_URL } from "..";
import { Store } from "@reduxjs/toolkit";
import { ToastShow } from "@/redux/slices/toastSlice";

export const Axios = axios.create({ baseURL: `${VITE_APP_BACKEND_URL}` });

export const setupAxios = (store: Store) => {
  Axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    const storeData = store.getState();
    const { token } = storeData.auth;

    if (token) {
      (
        request.headers as AxiosRequestHeaders
      ).Authorization = `Bearer ${token}`;
    }

    return request;
  });

  Axios.interceptors.response.use(
    (res) => {
      const toast = res?.data?.toast;
      if (toast) {
        store.dispatch(
          ToastShow({
            message: res?.data?.message,
            type: res?.data?.responseType,
          })
        );
      }
      return res;
    },
    (e) => {
      const toast = e?.response?.data?.toast;
      const message = e?.response?.data?.message;
      if (toast) {
        store.dispatch(
          ToastShow({
            message: message,
            type: e.response.data.responseType,
          })
        );
      }
    }
  );
};
