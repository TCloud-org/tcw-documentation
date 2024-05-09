import { Form } from "antd";
import { useEffect } from "react";
import { DisplayInput } from "../dataDisplayComponents/DisplayInput";
import { formItemLayout } from "./AddGraphExample";

export const ConfigureEndpointExample = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      clientId: "AccountManagementClient",
      service: "WorkflowOrchestratorService",
      endpoint:
        "http://wos-server-142456886.us-west-2.elb.amazonaws.com/api/private/v1",
      environment: "Development",
      alias: "live",
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
      <Form.Item label="Client" name="clientId">
        <DisplayInput />
      </Form.Item>
      <Form.Item label="Service" name="service">
        <DisplayInput />
      </Form.Item>
      <Form.Item label="Endpoint" name="endpoint">
        <DisplayInput />
      </Form.Item>
      <Form.Item label="Environment" name="environment">
        <DisplayInput />
      </Form.Item>
      <Form.Item label="Alias" name="alias">
        <DisplayInput />
      </Form.Item>
    </Form>
  );
};
