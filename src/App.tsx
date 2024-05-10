import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { AppFooter } from "./layoutComponents/AppFooter";
import { AppHeader } from "./layoutComponents/AppHeader";
import { AppSider } from "./layoutComponents/AppSider";
import { Container } from "./layoutComponents/Container";
import { EmailNotificationWorkflowPage } from "./pages/EmailNotificationWorkflowPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { StepWorkflowApiReferenceAuthPage } from "./pages/StepWorkflow/StepWorkflowApiReferenceAuthPage";
import { StepWorkflowApiReferenceIntroPage } from "./pages/StepWorkflow/StepWorkflowApiReferenceIntroPage";
import { StepWorkflowInitiateWorkflowPage } from "./pages/StepWorkflow/StepWorkflowInitiateWorkflowPage";
import { StepWorkflowPage } from "./pages/StepWorkflow/StepWorkflowPage";
import { StepWorkflowQuickstartPage } from "./pages/StepWorkflow/StepWorkflowQuickstartPage";
import { StepWorkflowApiReferenceApiPage } from "./pages/StepWorkflow/StepWorkflowApiReferenceApiPage";

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
          element: (
            <Navigate to="/step-workflow/getting-started/introduction" />
          ),
        },
        {
          path: "/step-workflow/getting-started",
          element: (
            <Navigate to="/step-workflow/getting-started/introduction" />
          ),
        },
        {
          path: "/step-workflow/getting-started/introduction",
          element: <StepWorkflowPage />,
        },
        {
          path: "/step-workflow/getting-started/quickstart",
          element: <StepWorkflowQuickstartPage />,
        },
        {
          path: "/step-workflow/api-reference/introduction",
          element: <StepWorkflowApiReferenceIntroPage />,
        },
        {
          path: "/step-workflow/api-reference/authentication",
          element: <StepWorkflowApiReferenceAuthPage />,
        },
        {
          path: "/step-workflow/api-reference/api",
          element: <StepWorkflowApiReferenceApiPage />,
        },
        {
          path: "/step-workflow/api-reference/api/initiateworkflow",
          element: <StepWorkflowInitiateWorkflowPage />,
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
