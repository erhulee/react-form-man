import FormCodeEditor from "./code-editor";
import SimpleDivider from "./divider";
import OptionInput from "./option-input";

export const valueType = {
  optionInput: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => (
      <OptionInput {...props}></OptionInput>
    ),
  },
  divider: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => (
      <SimpleDivider></SimpleDivider>
    ),
  },
  title: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => {
      return (
        <div className=" font-semibold text-base">{props.fieldProps.title}</div>
      );
    },
  },
  codeEditor: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => (
      <FormCodeEditor {...props}></FormCodeEditor>
    ),
  },
};
