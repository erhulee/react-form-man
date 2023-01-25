import { Button, message, Modal, Tabs } from "antd";
import { useRef, useState } from "react";
import useModal from "../../../../hooks/useModal";
import { FormIcon, GithubIcon, ReactIcon } from "../../../../Icons";
import actorStore from "../../../../store/actorStore";
import { wigetKitMap } from "../wiget-list/form-widget";
import generateFile from "./generateFile";
import CodeEditor from "../../../components/code-editor";
import { generateAddCode } from "./generateLafCode";
import globalFormSetting from "../../../../store/globalFormSetting";
import logo from "../../../../assets/formLogo.png";
function Header() {
  const [fileCode, setFileCode] = useState("");
  const [lafCold, setLafCode] = useState(["", "", "", "", ""]);
  const displayTsxRef = useRef(true);
  const { visible, toggle } = useModal();

  const handleExport = () => {
    const codes = actorStore.actors.map((actor) => {
      const type = actor.type;
      const weigetKit = wigetKitMap[type];
      const code = weigetKit.generate(actor.props);
      return code;
    });
    displayTsxRef.current = true;

    const fileCode = generateFile(codes);
    setFileCode(fileCode);
    toggle();
  };

  const handleExportLaf = () => {
    const instanceKeys: string[] = [];
    displayTsxRef.current = false;
    actorStore.actors.forEach((actor) => {
      const props = actor.props;
      const name = props.name;
      if (name == null) return;
      instanceKeys.push(name);
    });

    const addCode = generateAddCode(
      instanceKeys,
      globalFormSetting.collectionName
    );

    setLafCode([addCode, addCode, addCode, addCode, addCode]);
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
          className=" flex items-center justify-center bg-blue-800 mr-4"
          onClick={() => handleExport()}
        >
          <ReactIcon className=" mr-2"></ReactIcon>
          导出Tsx
        </Button>
        <Button
          type="primary"
          className=" flex items-center justify-center bg-blue-800 "
          onClick={() => handleExportLaf()}
        >
          <ReactIcon className=" mr-2"></ReactIcon>
          导出Laf
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
        {displayTsxRef.current ? (
          <CodeEditor code={fileCode}></CodeEditor>
        ) : (
          <Tabs
            items={[
              {
                label: "增加",
                key: "add",
                children: <CodeEditor code={lafCold[0]}></CodeEditor>,
              },
              {
                label: "删除",
                key: "delete",
                children: <CodeEditor code={lafCold[1]}></CodeEditor>,
              },
              {
                label: "修改",
                key: "update",
                children: <CodeEditor code={lafCold[2]}></CodeEditor>,
              },
              {
                label: "查询全部",
                key: "queryAll",
                children: <CodeEditor code={lafCold[3]}></CodeEditor>,
              },
              {
                label: "查询一条",
                key: "queryOne",
                children: <CodeEditor code={lafCold[4]}></CodeEditor>,
              },
            ]}
          ></Tabs>
        )}
      </Modal>
    </div>
  );
}

export default Header;
