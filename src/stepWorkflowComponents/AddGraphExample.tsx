import { Flex, Form } from "antd";
import { useEffect } from "react";
import { graphXml } from "../config/businessConfig";
import { DisplayInput } from "../dataDisplayComponents/DisplayInput";
import { CodeBeam } from "../dataEntryComponents/CodeBeam";

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

export const AddGraphExample = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      clientId: "AccountManagementClient",
      workflow: "CreateAccountWorkflow",
      alias: "live",
      description: "Adding a verification state before seeding an account",
      version: 1,
    });
  }, [form]);

  return (
    <Flex vertical gap={16}>
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
        <Form.Item label="Workflow" name="workflow">
          <DisplayInput />
        </Form.Item>
        <Form.Item label="Alias" name="alias">
          <DisplayInput />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <DisplayInput />
        </Form.Item>

        <Form.Item label="Version" name="version">
          <DisplayInput />
        </Form.Item>
      </Form>
      <CodeBeam language="xml" value={graphXml} label="Graph" />
    </Flex>
  );
};
