import AceEditor, { IEditorProps } from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-json"; //
import "ace-builds/src-min-noconflict/mode-css"; //
import "ace-builds/src-min-noconflict/theme-sqlserver"; // 新设主题
import { useRef } from "react";
type Props = {
  readonly?: boolean;
  width?: string;
  code: string;
  onChange?: (v: string) => void;
};
function CodeEditor(props: Props) {
  const { code, onChange: parentChange = () => {}, width, readonly } = props;

  const aceEditorRef: any = useRef(null);
  const editorProps: IEditorProps = {
    $blockScrolling: true,
    highlightActiveLine: true,
  };

  return (
    <AceEditor
      ref={aceEditorRef}
      width="100%"
      mode="javascript"
      theme="github"
      onChange={parentChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={editorProps}
      readOnly={readonly}
      value={code}
    />
  );
}

export default CodeEditor;
