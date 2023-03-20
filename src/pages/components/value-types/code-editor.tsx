import useModal from "@hooks/useModal";
import { Button, message } from "antd";
import Modal from "antd/es/modal/Modal";
import { useRef } from "react";
import CodeEditor, { Size } from "../code-editor";
import FullScreenButton from "../code-editor/full-screen-button";

type Props = {
  value: string;
  onChange: Function;
};

function FormCodeEditor(props: Props) {
  const { value = "", onChange } = props;
  const { close, open, visible } = useModal(false);
  const handleFullScreen = (isFull: boolean) => {
    if (isFull) open();
    else close();
  };
  const codeRef = useRef("");

  return (
    <div className=" bg-slate-100">
      <CodeEditor
        size={Size.mini}
        value={value}
        onChange={(val) => {
          onChange(val);
        }}
        readonly={true}
      ></CodeEditor>
      <div className="flex justify-end p-1">
        <FullScreenButton callback={handleFullScreen}></FullScreenButton>
      </div>

      <Modal
        open={visible}
        width="800px"
        onOk={() => {
          let instance = null;
          // try {
          // debugger;
          // instance = eval(`${codeRef.current}`);
          console.log("instance:", instance);
          onChange(codeRef.current);
          close();
          // } catch (e) {
          //   message.error("eval 失败", e);
          // }
        }}
        onCancel={close}
      >
        <div>
          <div className=" text-lg ">代码输入框</div>
          <div className=" text-xs text-gray-400 italic mb-3 ">
            以下将会使用 eval,请慎重~
          </div>
          <CodeEditor
            size={Size.medium}
            value={value}
            onChange={(val) => {
              codeRef.current = val;
            }}
            readonly={false}
            showGutter={true}
          ></CodeEditor>
        </div>
      </Modal>
    </div>
  );
}

export default FormCodeEditor;
