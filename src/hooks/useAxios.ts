import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Axios } from "@/config/axios";

const useAxios = <T = any>(
  method: "get" | "post" | "put" | "patch" | "delete"
): [
  (
    url: string,
    dataOrConfig?: object | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => Promise<{ data?: T; error?: any }>,
  { isLoading: boolean; isError: boolean; isSuccess: boolean }
] => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const axiosRequest = async (
    url: string,
    dataOrConfig?: object | AxiosRequestConfig,
    config?: AxiosRequestConfig
  ) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);

      let response: AxiosResponse<T>;
      if (method === "get" || method === "delete") {
        response = await Axios[method](url, dataOrConfig as AxiosRequestConfig);
      } else {
        response = await Axios[method](
          url,
          dataOrConfig as object,
          config || {}
        );
      }

      setIsLoading(false);
      setIsSuccess(true);
      return { data: response.data };
    } catch (error: any) {
      setIsError(true);
      setIsLoading(false);
      setIsSuccess(false);

      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : error.message;

      return { error: errorMessage, data: error?.response?.data };
    }
  };

  return [axiosRequest, { isLoading, isError, isSuccess }];
};

export const useAxiosGet = () => useAxios("get");
export const useAxiosPost = () => useAxios("post");
export const useAxiosPut = () => useAxios("put");
export const useAxiosPatch = () => useAxios("patch");
export const useAxiosDelete = () => useAxios("delete");
