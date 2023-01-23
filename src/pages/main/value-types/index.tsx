import OptionInput from "./option-input";

export const valueType = {
  optionInput: {
    render: (text: string) => <a>{text}</a>,
    renderFormItem: (text: string, props: any) => (
      <OptionInput {...props}></OptionInput>
    ),
  },
};
