import { Form } from "antd";
import { useEffect } from "react";
import { DisplayInput } from "../dataDisplayComponents/DisplayInput";
import { formItemLayout } from "./AddGraphExample";

export const CreateWorkflowExample = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      workflowName: "CreateAccountWorkflow",
      clientId: "AccountManagementClient",
      retentionPeriod: "1 month",
    });
  }, [form]);

  return (
    <Form
      form={form}
      {...formItemLayout}
      labelAlign="left"
      size="small"
      colon={false}
    >
      <Form.Item label="Workflow" name="workflowName">
        <DisplayInput />
      </Form.Item>

      <Form.Item label="Client" name="clientId">
        <DisplayInput />
      </Form.Item>

      <Form.Item label="Rentention period" name="retentionPeriod">
        <DisplayInput />
      </Form.Item>
    </Form>
  );
};
