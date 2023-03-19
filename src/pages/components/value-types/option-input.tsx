import { Button, Dropdown, Form, Input, Tooltip } from "antd";
import {
  PlusOutlined,
  MinusCircleOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { cloneDeep } from "lodash-es";
import Modal from "antd/es/modal/Modal";
import { useRef } from "react";
import { enum2options } from "../../../code-decode/enum2options";
import useModal from "../../../hooks/useModal";
import { QuestionCircleOutlined } from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import CodeEditor from "../code-editor";
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
  const { value, onChange } = props?.fieldProps;
  const [form] = Form.useForm();

  form.setFieldValue("options", value);

  const handleChange = (
    index: number,
    key: "value" | "label",
    newValue: string
  ) => {
    const options = cloneDeep(value);
    options[index][key] = newValue;
    onChange(options);
  };

  const handleAddItem = () => {
    const options = form.getFieldValue("options") || [];
    onChange([...options, { label: "label", value: "value" }]);
  };

  const handleModalOK = (method = "default") => {
    const options = cloneDeep(value);
    const addOptions = enum2options(codeRef.current);
    if (method == "default") {
      onChange([...options, ...addOptions]);
    } else {
      onChange(addOptions);
    }
    close();
  };

  const handleDelete = (index: number) => {
    const options = cloneDeep(value);
    options.splice(index, 1);
    onChange(options);
  };
  const codeRef = useRef("");
  const { open, visible, close } = useModal(false);
  return (
    <div>
      <Form.List name="options">
        {(fields) => {
          return (
            <>
              {fields.map((field, index) => (
                <Form.Item required={false} key={Math.random()}>
                  <div className=" flex">
                    <Input
                      defaultValue={value[index]?.label}
                      placeholder="label"
                      onChange={(e) => {
                        const value = e.target.value;
                        handleChange(index, "label", value);
                      }}
                    />
                    <Input
                      defaultValue={value[index]?.value}
                      className=" mx-2"
                      placeholder="value"
                      onChange={(e) => {
                        const value = e.target.value;
                        handleChange(index, "value", value);
                      }}
                    />
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
      {/* </Form> */}

      <Modal
        open={visible}
        onCancel={close}
        footer={
          <ButtonGroup>
            <Dropdown.Button
              className="mr-2"
              type="primary"
              icon={<DownOutlined />}
              onClick={() => handleModalOK()}
              menu={{
                items: [
                  {
                    label: (
                      <div
                        onClick={() => {
                          handleModalOK("override");
                        }}
                      >
                        覆盖
                      </div>
                    ),

                    key: "1",
                  },
                ],
              }}
            >
              导入
            </Dropdown.Button>
            <Button onClick={close}>取消</Button>
          </ButtonGroup>
        }
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
