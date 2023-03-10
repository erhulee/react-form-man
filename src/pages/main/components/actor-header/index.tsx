import { Button, message, Modal, Tabs } from "antd";
import { useRef, useState } from "react";
import useModal from "../../../../hooks/useModal";
import { FormIcon, GithubIcon, ReactIcon } from "../../../../Icons";
import actorStore from "../../../../store/actorStore";
import generateFile from "./generateFile";
import CodeEditor from "../../../components/code-editor";
import { generateAddCode } from "./generateLafCode";
import globalFormSetting from "../../../../store/globalFormSetting";
import generateAntdProSchema from "./generateAntdProSchema";
import { widgetKitMap } from "../../constant";
function Header() {
  const [fileCode, setFileCode] = useState("");
  const [lafCold, setLafCode] = useState(["", "", "", "", ""]);
  const displayTsxRef = useRef(true);
  const { visible, toggle } = useModal();

  const handleExport = () => {
    const codes = actorStore.actors.map((actor) => {
      const type = actor.type;
      const widgetKit = widgetKitMap[type];
      const code = widgetKit.generate(actor.props);
      return code;
    });
    displayTsxRef.current = true;

    const fileCode = generateFile(codes, globalFormSetting);
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

  const handleExportAntdPro = () => {
    const code = generateAntdProSchema(actorStore.actors);
    setFileCode(code);
    toggle();
  };

  const handleOk = async () => {
    await navigator.clipboard.writeText(fileCode);
    message.success("ε€εΆζε");
    toggle();
  };
  return (
    <div className="flex justify-between items-center h-full">
      <span className=" text-white font-semibold text-xl flex items-center">
        <FormIcon className=" text-3xl mr-2"></FormIcon>
        React θ‘¨εδΎ 
      </span>

      <div className=" flex items-center">
        <Button
          type="primary"
          className=" flex items-center justify-center bg-blue-800 "
          onClick={() => handleExport()}
        >
          <ReactIcon className=" mr-2"></ReactIcon>
          ε―ΌεΊTsx
        </Button>
        <Button
          type="primary"
          className=" flex items-center justify-center bg-blue-800 mx-4 "
          onClick={() => handleExportLaf()}
        >
          <ReactIcon className=" mr-2"></ReactIcon>
          ε―ΌεΊLaf
        </Button>
        {/* 
        <Button
          type="primary"
          onClick={() => handleExportAntdPro()}
          className="bg-blue-800"
        >
          ε―ΌεΊ Antd Pro
        </Button> */}

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
        okText="ε€εΆ"
        cancelText="εζΆ"
      >
        {displayTsxRef.current ? (
          <CodeEditor code={fileCode}></CodeEditor>
        ) : (
          <Tabs
            items={[
              {
                label: "ε’ε ",
                key: "add",
                children: <CodeEditor code={lafCold[0]}></CodeEditor>,
              },
              {
                label: "ε ι€",
                key: "delete",
                children: <CodeEditor code={lafCold[1]}></CodeEditor>,
              },
              {
                label: "δΏ?ζΉ",
                key: "update",
                children: <CodeEditor code={lafCold[2]}></CodeEditor>,
              },
              {
                label: "ζ₯θ―’ε¨ι¨",
                key: "queryAll",
                children: <CodeEditor code={lafCold[3]}></CodeEditor>,
              },
              {
                label: "ζ₯θ―’δΈζ‘",
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
