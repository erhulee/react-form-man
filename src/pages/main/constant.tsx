import { Input, InputNumber } from "antd";

export const schema2ActorCreator: any = {
  input: () => <Input></Input>,
  textarea: () => <Input.TextArea></Input.TextArea>,
  number: () => <InputNumber></InputNumber>,
};
