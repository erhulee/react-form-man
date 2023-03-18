import { Card, Divider, Form, Input, InputNumber, Radio, Switch } from "antd";
import { GlobalFormSettingAction } from "../../../../store/globalFormSetting";
const useForm = Form.useForm;
function GlobalSettingForm() {
  const [form] = useForm();
  const handleChange = () => {
    const values = form.getFieldsValue();
    GlobalFormSettingAction.updateFileds(values);
  };
  return (
    <div>
      <Card title="全局设置">
        <Form
          form={form}
          onValuesChange={handleChange}
          labelCol={{ span: 7 }}
          labelAlign="left"
        >
          <Form.Item name="name" label="表单名称">
            <Input />
          </Form.Item>
          <Form.Item name="labelCol" label="标签宽度" tooltip={"labelCol"}>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="labelAlign"
            label="标签对齐"
            tooltip={"labelAlign"}
            initialValue={"left"}
          >
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
          <Form.Item name="layout" label="表单布局" initialValue={"horizontal"}>
            <Radio.Group
              options={[
                { label: "水平", value: "horizontal" },
                { label: "垂直", value: "vertical" },
                { label: "行内", value: "inline" },
              ]}
            />
          </Form.Item>
          <Form.Item name="size" label="尺寸" initialValue={"middle"}>
            <Radio.Group
              defaultValue={"middle"}
              options={[
                { label: "小号", value: "small" },
                { label: "中等", value: "middle" },
                { label: "大号", value: "large" },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="colon"
            label="显示冒号"
            initialValue={true}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Divider></Divider>
          {/* <div className=" my-2 text-lg font-semibold ">Laf设置</div>
          <Form.Item name="collectionName" label="集合名字">
            <Input />
          </Form.Item> */}
        </Form>
      </Card>
    </div>
  );
}

export default GlobalSettingForm;
