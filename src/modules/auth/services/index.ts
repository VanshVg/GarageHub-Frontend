import { useAxiosPost } from "@/hooks/useAxios";
import { AUTH_PATH } from "../types/constants";

export const useSignupApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const signupApi = async (data: object) => {
    return postApi(`${AUTH_PATH}/signup`, data);
  };

  return { signupApi, isLoading, isError, isSuccess };
};

export const useUpdateRoleApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const updateRoleApi = async (data: object) => {
    return postApi(`${AUTH_PATH}/update-role`, data);
  };

  return { updateRoleApi, isLoading, isError, isSuccess };
};
