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

export const useLoginApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const loginApi = async (data: object) => {
    return postApi(`${AUTH_PATH}/login`, data);
  };

  return { loginApi, isLoading, isError, isSuccess };
};

export const useForgotPasswordApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const forgotPasswordApi = async (data: object) => {
    return postApi(`${AUTH_PATH}/forgot-password`, data);
  };

  return { forgotPasswordApi, isLoading, isError, isSuccess };
};

export const useResendOtpApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const resendOtpApi = async (token: string) => {
    return postApi(`${AUTH_PATH}/resend-otp?auth=${token}`);
  };

  return { resendOtpApi, isLoading, isError, isSuccess };
};

export const useOtpVerificationApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const otpVerificationApi = async (data: object, token: string) => {
    return postApi(`${AUTH_PATH}/verify-otp?auth=${token}`, data);
  };

  return { otpVerificationApi, isLoading, isError, isSuccess };
};

export const useResetPasswordApi = () => {
  const [postApi, { isError, isLoading, isSuccess }] = useAxiosPost();

  const resetPasswordApi = async (data: object, token: string) => {
    return postApi(`${AUTH_PATH}/reset-password?auth=${token}`, data);
  };

  return { resetPasswordApi, isLoading, isError, isSuccess };
};
