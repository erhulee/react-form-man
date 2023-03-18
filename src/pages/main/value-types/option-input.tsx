import { Button, Form, Input, Tooltip } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { cloneDeep } from "lodash-es";
import Modal from "antd/es/modal/Modal";
import CodeEditor from "../../components/code-editor";
import { useRef } from "react";
import { enum2options } from "../../../code-decode/enum2options";
import useModal from "../../../hooks/useModal";
import { QuestionCircleOutlined } from "@ant-design/icons";
type Props = {
  fieldProps: {
    value: Array<{
      value: string;
      label: string;
    }>;
    onChange: Function;
  };
};
enum Op {
  apple,
  pear,
}
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
    onChange([...options, { label: "label", value: "value" }]);
  };

  const handleDelete = (index: number) => {
    const options = cloneDeep(form.getFieldValue("options"));
    options.splice(index, 1);
    onChange(options);
  };

  const codeRef = useRef("");

  const { open, visible, close } = useModal(false);
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

      <Modal
        open={visible}
        onOk={() => {
          console.log(enum2options(codeRef.current));
        }}
        onCancel={close}
      >
        <CodeEditor
          code=""
          onChange={(code) => (codeRef.current = code)}
        ></CodeEditor>
      </Modal>

      <Tooltip title="支持将 TS 中的 enum 一键转入">
        <QuestionCircleOutlined />
      </Tooltip>

      <Button type="link" onClick={open}>
        枚举导入
      </Button>
    </div>
  );
}

export default OptionInput;
