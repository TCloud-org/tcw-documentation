import { Flex, Form, Typography } from "antd";
import { ReactNode, useEffect } from "react";
import { DisplayInput } from "../dataDisplayComponents/DisplayInput";
import { ScreenContainer } from "../layoutComponents/ScreenContainer";
import { textColor } from "../dataEntryComponents/CodeBeam";

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
    <ScreenContainer showDots label="Form">
      <Flex vertical className="px-6 pt-6">
        <Form
          form={form}
          {...formItemLayout}
          labelAlign="left"
          size="small"
          colon={false}
        >
          {Object.keys(data).map((k, i) => (
            <Form.Item
              label={
                <Typography.Text style={{ color: textColor }}>
                  {k}
                </Typography.Text>
              }
              name={k}
              key={i}
            >
              <DisplayInput />
            </Form.Item>
          ))}
          {props.children}
        </Form>
      </Flex>
    </ScreenContainer>
  );
};
