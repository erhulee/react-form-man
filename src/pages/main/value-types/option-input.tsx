import { Button, Form, Input } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
type Props = {
  fieldProps: {
    value: Array<{
      value: string;
      label: string;
    }>;
    onChange: Function;
  };
};
function OptionInput(props: Props) {
  const { value, onChange } = props.fieldProps;
  const [form] = Form.useForm();
  form.setFieldValue("options", value);
  const handleChange = (index: number, key: string, value: string) => {
    const options = form.getFieldValue("options");
    options[index][key] = value;
    form.setFieldValue("options", options);
    onChange(options);
  };

  const handleAddItem = () => {
    const options = form.getFieldValue("options");
    options.push({ label: "label", value: "value" });
    form.setFieldValue("options", options);
    onChange(options);
  };

  const handleDelete = (index: number) => {
    const options = form.getFieldValue("options");
    options.splice(index, 1);
    form.setFieldValue("options", options);
    onChange(options);
  };
  return (
    <div>
      <Form form={form}>
        <Form.List name="options">
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                {fields.map((field, index) => (
                  <Form.Item required={false} key={index}>
                    <div className=" flex">
                      <Form.Item noStyle>
                        <Input
                          defaultValue={value[index]?.label}
                          placeholder="label"
                          onChange={(e) => {
                            const value = e.target.value;
                            handleChange(index, "label", value);
                          }}
                        />
                      </Form.Item>
                      <Form.Item noStyle>
                        <Input
                          defaultValue={value[index]?.value}
                          className=" mx-2"
                          placeholder="value"
                          onChange={(e) => {
                            const value = e.target.value;
                            handleChange(index, "value", value);
                          }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          onClick={() => handleDelete(index)}
                        />
                      ) : null}
                    </div>
                  </Form.Item>
                ))}

                <Button
                  className=" w-full"
                  type="dashed"
                  onClick={() => {
                    handleAddItem();
                  }}
                  icon={<PlusOutlined />}
                >
                  添加
                </Button>
              </>
            );
          }}
        </Form.List>
      </Form>
    </div>
  );
}

export default OptionInput;
