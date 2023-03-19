import useModal from "@hooks/useModal";
import { Button } from "antd";
import Modal from "antd/es/modal/Modal";
import CodeEditor, { Size } from "../code-editor";
import FullScreenButton from "../code-editor/full-screen-button";

type Props = {
  value: string;
  onChange: Function;
};

function FormCodeEditor(props: Props) {
  const { value, onChange } = props;
  const { close, open, visible } = useModal(false);
  const handleFullScreen = (isFull: boolean) => {
    if (isFull) open();
    else close();
  };
  return (
    <div className=" bg-slate-100">
      <CodeEditor
        size={Size.mini}
        code={value}
        onChange={(val) => {
          console.log(value + val);
          onChange(value + val);
        }}
        readonly={false}
      ></CodeEditor>
      <div className="flex justify-end p-1">
        <FullScreenButton callback={handleFullScreen}></FullScreenButton>
      </div>

      <Modal open={visible}>
        <CodeEditor
          size={Size.medium}
          code={value}
          onChange={(val) => {
            console.log(value + val);
            onChange(value + val);
          }}
          readonly={false}
        ></CodeEditor>
      </Modal>
    </div>
  );
}

export default FormCodeEditor;
