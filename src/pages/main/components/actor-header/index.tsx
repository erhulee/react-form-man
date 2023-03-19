import { Button, Checkbox, message, Modal, Tabs } from "antd";
import { useRef, useState } from "react";
import useModal from "@hooks/useModal";
import { FormIcon, GithubIcon, ReactIcon } from "../../../../Icons";
import actorStore from "@store/actorStore";
import { widgetKitMap } from "../../constant";
import { generateAntDesignForm } from "../../../../code-generator/andt-generator";
import CodeEditor from "src/pages/components/code-editor";

function Header() {
  const [fileCode, setFileCode] = useState("");
  const displayTsxRef = useRef(true);
  const { visible, toggle } = useModal();

  const handleExport = () => {
    displayTsxRef.current = true;
    debugger;
    let fileCode = generateAntDesignForm(actorStore.actorsTree, widgetKitMap);

    setFileCode(fileCode);
    toggle();
  };

  const handleOk = async () => {
    await navigator.clipboard.writeText(fileCode);
    message.success("复制成功");
    toggle();
  };
  return (
    <div className="flex justify-between items-center h-full">
      <span className=" text-white font-semibold text-xl flex items-center">
        <FormIcon className=" text-3xl mr-2"></FormIcon>
        React 表单侠
      </span>

      <div className=" flex items-center">
        <Button
          type="primary"
          className=" flex items-center justify-center bg-blue-800 "
          onClick={() => handleExport()}
        >
          <ReactIcon className=" mr-2"></ReactIcon>
          导出TSX
        </Button>
        <a
          className=" h-fit flex items-center ml-3"
          href="https://github.com/erhulee/react-form-man"
          target="_blank"
        >
          <GithubIcon className=" text-4xl border border-white border-solid rounded-full p-1"></GithubIcon>
        </a>
      </div>
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
