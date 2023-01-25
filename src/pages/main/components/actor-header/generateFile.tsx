function generateFile(
  codes: string[],
  mode: "simple" | "all" = "all",
  formName?: string
) {
  const template = `
  import { Form } from "antd";

  const useForm = Form.useForm;
  function CustomForm() {
    const [form] = useForm();
    return (
      <Form form = {form}>
        ${codes.join(" ")}
      </Form>);
  }
  
  export default CustomForm
    `;

  return template;
}

export default generateFile;
