import { Card, Form, Input } from "antd";
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
      <Form form={form} onValuesChange={handleChange}>
        <Form.Item name="collectionName" label="集合名字">
          <Input id="" />
        </Form.Item>
      </Form>
    </Card>
  );
}

export default GlobalSettingForm;
