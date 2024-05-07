import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppSider } from "./layoutComponents/AppSider";
import { AppHeader } from "./layoutComponents/AppHeader";
import { AppFooter } from "./layoutComponents/AppFooter";
import { HomePage } from "./pages/HomePage";

function App() {
  const Wrapper = () => {
    const { token } = theme.useToken();
    return (
      <Layout>
        <AppSider />
        <Layout style={{ minHeight: "100vh" }}>
          <AppHeader />
          <Content
            style={{
              background: token.colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      errorElement: <div></div>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
