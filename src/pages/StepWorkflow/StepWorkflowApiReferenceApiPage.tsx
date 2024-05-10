import { Fragment } from "react/jsx-runtime";
import { StepWorkflowInitiateWorkflow } from "../../apiRefComponents/StepWorkflow/StepWorkflowInitiateWorkflow";
import { Divider } from "antd";

const apis = [
  {
    key: "InitiateWorkflow",
    children: <StepWorkflowInitiateWorkflow />,
  },
];

export const StepWorkflowApiReferenceApiPage = () => {
  const apiComparator = (a: any, b: any) => {
    return a.key.localeCompare(b.key);
  };

  return (
    <>
      {apis.sort(apiComparator).map((api, i) => (
        <Fragment key={i}>
          {i !== 0 && <Divider />}
          {api.children}
        </Fragment>
      ))}
    </>
  );
};
