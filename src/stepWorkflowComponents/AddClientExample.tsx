import { Form } from "antd";
import { useEffect } from "react";
import { DisplayInput } from "../dataDisplayComponents/DisplayInput";
import { formItemLayout } from "./AddGraphExample";

export const AddClientExample = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      clientId: "AccountManagementClient",
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
    </Form>
  );
};
