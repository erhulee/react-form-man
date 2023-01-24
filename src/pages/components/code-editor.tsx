import AceEditor, { IEditorProps } from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-json"; //
import "ace-builds/src-min-noconflict/mode-css"; //
import "ace-builds/src-min-noconflict/theme-sqlserver"; // 新设主题
import { useRef } from "react";
function CodeEditor(props: { code: string }) {
  const code = props.code;
  const aceEditorRef = useRef();
  const editorProps: IEditorProps = {
    $blockScrolling: true,
    highlightActiveLine: true,
  };
  function onChange(newValue: any) {
    console.log("change", newValue);
  }

  return (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={editorProps}
      readOnly={true}
      value={code}
    />
  );
}

export default CodeEditor;
