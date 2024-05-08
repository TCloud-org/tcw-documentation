import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppSider } from "./layoutComponents/AppSider";
import { AppHeader } from "./layoutComponents/AppHeader";
import { AppFooter } from "./layoutComponents/AppFooter";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { StepWorkflowPage } from "./pages/StepWorkflow/StepWorkflowPage";
import { EmailNotificationWorkflowPage } from "./pages/EmailNotificationWorkflowPage";
import { Container } from "./layoutComponents/Container";
import { StepWorkflowSetupPage } from "./pages/StepWorkflow/StepWorkflowSetupPage";

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
            <Container>
              <Outlet />
            </Container>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/step-workflow",
          element: <StepWorkflowPage />,
        },
        {
          path: "/step-workflow/setup",
          element: <StepWorkflowSetupPage />,
        },
        {
          path: "/email-notification-workflow",
          element: <EmailNotificationWorkflowPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
