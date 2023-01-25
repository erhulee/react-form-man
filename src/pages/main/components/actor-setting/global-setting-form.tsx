import { Card, Form, Input, InputNumber, Radio } from "antd";
import { GlobalFormSettingAction } from "../../../../store/globalFormSetting";
const useForm = Form.useForm;
function GlobalSettingForm() {
  const [form] = useForm();
  const handleChange = () => {
    const values = form.getFieldsValue();
    GlobalFormSettingAction.updateFileds(values);
  };
  return (
    <Card title="全局设置">
      <Form
        form={form}
        onValuesChange={handleChange}
        labelCol={{ span: 8 }}
        labelAlign="left"
      >
        <Form.Item name="collectionName" label="集合名字">
          <Input />
        </Form.Item>

        <Form.Item name="labelCol" label="labelCol">
          <InputNumber />
        </Form.Item>

        <Form.Item name="labelAlign" label="labelAlign">
          <Radio.Group
            options={[
              {
                label: "向左对齐",
                value: "left",
              },
              {
                label: "向右对齐",
                value: "right",
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default GlobalSettingForm;
