import AceEditor, { IEditorProps } from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-json"; //
import "ace-builds/src-min-noconflict/mode-css"; //
import "ace-builds/src-min-noconflict/theme-sqlserver"; // 新设主题
import { useRef } from "react";
import { format } from "./prettier";

export enum Size {
  mini,
  medium,
}

type Props = {
  readonly?: boolean;
  width?: string;
  code: string;
  onChange?: (v: string) => void;
  size?: Size;
};
function CodeEditor(props: Props) {
  const { code, onChange: parentChange = () => {}, readonly } = props;
  const aceEditorRef: any = useRef(null);
  const editorProps: IEditorProps = {
    $blockScrolling: true,
    highlightActiveLine: true,
  };

  const rect: {
    width: string;
    height?: string;
  } = {
    width: "100%",
  };

  if (props.size == Size.mini) {
    rect.width = " 198px";
    rect.height = "200px";
  }

  return (
    <div className="">
      <AceEditor
        className=" bg-slate-100"
        ref={aceEditorRef}
        mode="javascript"
        theme="github"
        onChange={(v) => {
          console.log("V", v);
        }}
        name="UNIQUE_ID_OF_DIV"
        editorProps={editorProps}
        readOnly={readonly}
        value={format(code)}
        showGutter={false}
        {...rect}
      />
    </div>
  );
}

export default CodeEditor;
