import FormCodeEditor from "./code-editor";
import SimpleDivider from "./divider";
import OptionInput from "./option-input";
import Tab from "./tab";

export const valueType = {
  optionInput: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => (
      <OptionInput {...props}></OptionInput>
    ),
  },
  dividerWithTitle: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => {
      console.log("props:", props);
      return <SimpleDivider {...props.fieldProps}></SimpleDivider>;
    },
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
    renderFormItem: (text: string, props: any) => {
      return <FormCodeEditor {...props.fieldProps}></FormCodeEditor>;
    },
  },
  tab: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => {
      return <Tab {...props}></Tab>;
    },
  },
};
