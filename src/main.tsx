import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { setupAxios } from "./config/axios/index.ts";
import ToastNotification from "./common/components/toast-notification/ToastNotification.tsx";

setupAxios(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastNotification />
    <App />
  </Provider>
);
