import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#4312e5",
        boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
        boxShadowSecondary: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
        colorBorder: "rgba(90, 116, 148, 0.15)",
        colorText: "#3f3f46",
        colorTextBase: "#3f3f46",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
