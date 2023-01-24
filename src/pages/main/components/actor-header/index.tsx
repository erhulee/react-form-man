import { Button, message, Modal } from "antd";
import { useRef, useState } from "react";
import useModal from "../../../../hooks/useModal";
import { ReactIcon } from "../../../../Icons";
import actorStore from "../../../../store/actorStore";
import { wigetKitMap } from "../wiget-list/form-widget";
import generateFile from "./generateFile";
import Editor from "@monaco-editor/react";
import CodeEditor from "../../../components/code-editor";
function Header() {
  const [fileCode, serFileCode] = useState("");
  const { visible, toggle } = useModal();
  const handleExport = () => {
    const codes = actorStore.actors.map((actor) => {
      const type = actor.type;
      const weigetKit = wigetKitMap[type];
      const code = weigetKit.generate(actor.props);
      return code;
    });
    const fileCode = generateFile(codes);
    serFileCode(fileCode);
    toggle();
  };

  const handleOk = async () => {
    await navigator.clipboard.writeText(fileCode);
    message.success("复制成功");
    toggle();
  };
  return (
    <div className="flex justify-between items-center h-full">
      <span className=" text-white font-semibold text-xl">React Form Man</span>

      <Button
        type="primary"
        className=" flex items-center justify-center bg-blue-800 "
        onClick={() => handleExport()}
      >
        <ReactIcon className=" mr-2"></ReactIcon>
        导出
      </Button>
      <Modal
        open={visible}
        onCancel={toggle}
        onOk={handleOk}
        width="800px"
        okText="复制"
        cancelText="取消"
      >
        <CodeEditor code={fileCode}></CodeEditor>
      </Modal>
    </div>
  );
}

export default Header;
