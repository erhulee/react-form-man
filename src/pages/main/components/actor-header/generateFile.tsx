import { GlobalFormSetting } from "../../../../store/globalFormSetting";
import getFormProps from "../wiget-list/share/getFormProps";
import splitProps from "../wiget-list/share/splitProps";

function generateFile(
  codes: string[],
  formProps: GlobalFormSetting,
  mode: "simple" | "all" = "all",
  formName?: string
) {
  const pureProps = getFormProps(formProps);
  const propsString = splitProps(pureProps);
  const template = `
  import { Form } from "antd";

  const useForm = Form.useForm;
  function CustomForm() {
    const [form] = useForm();
    return (
      <Form form = {form} ${propsString} >
        ${codes.join(" ")}
      </Form>);
  }
  
  export default CustomForm
    `;

  return template;
}

export default generateFile;
