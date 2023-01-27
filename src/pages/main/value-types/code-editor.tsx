import { Input, Modal } from "antd";
import useModal from "../../../hooks/useModal";
import CodeEditor from "../../components/code-editor";

type Props = {
  fieldProps: {
    value: string;
    onChange: Function;
  };
};

function FormCodeEditor(props: Props) {
  const fieldProps = props.fieldProps;
  const { value: codeString, onChange: triggerParent } = fieldProps;
  const { visible, toggle } = useModal();
  return (
    <div>
      <Input.TextArea
        value={codeString}
        onClick={toggle}
        readOnly
      ></Input.TextArea>
      <Modal open={visible} onCancel={toggle} onOk={toggle}>
        <CodeEditor
          code={codeString}
          onChange={(value) => triggerParent(value)}
          readonly={false}
        ></CodeEditor>
      </Modal>
    </div>
  );
}

export default FormCodeEditor;
