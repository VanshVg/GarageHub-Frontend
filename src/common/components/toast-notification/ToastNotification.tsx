import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ToastShow, toastSelector } from "@/redux/slices/toastSlice";
import { GeneralResponseEnum } from "@/common/types";

const ToastNotification = () => {
  const toastMessage = useSelector(toastSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (toastMessage.message) {
      if (toastMessage.type === GeneralResponseEnum.error) {
        toast.error(toastMessage.message);
      } else {
        toast.success(toastMessage.message);
      }
      setTimeout(() => {
        dispatch(ToastShow({ message: null, type: null }));
      }, 500);
    }
  }, [toastMessage?.message]);

  return (
    <ToastContainer
      className="!z-[9999999]"
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
    />
  );
};

export default ToastNotification;
