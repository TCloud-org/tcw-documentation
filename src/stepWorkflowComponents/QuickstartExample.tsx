import { Flex, Form } from "antd";
import { ReactNode, useEffect } from "react";
import { DisplayInput } from "../dataDisplayComponents/DisplayInput";

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

export const QuickstartExample = (props: {
  data?: { [key: string]: string | number };
  children?: ReactNode;
}) => {
  const { data = {} } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(data);
  }, [form, data]);

  return (
    <Flex vertical>
      <Form
        form={form}
        {...formItemLayout}
        labelAlign="left"
        size="small"
        colon={false}
      >
        {Object.keys(data).map((k, i) => (
          <Form.Item label={k} name={k} key={i}>
            <DisplayInput />
          </Form.Item>
        ))}
      </Form>
      {props.children}
    </Flex>
  );
};
