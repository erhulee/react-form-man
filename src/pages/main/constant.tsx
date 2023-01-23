import { Input, InputNumber, Switch, Radio, Checkbox } from "antd";
import {
  CheckboxIcon,
  InputIcon,
  NumberIcon,
  RadioIcon,
  SwitchIcon,
  TextareaIcon,
} from "../../Icons";
import { WigetItemProps } from "./components/wiget-list";

export const schema2ActorCreator: any = {
  input: (props: any) => {
    return <Input {...props}></Input>;
  },
  textarea: (props: any) => {
    return <Input.TextArea {...props}></Input.TextArea>;
  },
  number: (props: any) => {
    return <InputNumber {...props}></InputNumber>;
  },
  switch: (props: any) => {
    return <Switch {...props}></Switch>;
  },
  radio: (props: any) => {
    return <Radio.Group {...props}></Radio.Group>;
  },
  checkbox: (props: any) => {
    return <Checkbox.Group {...props}></Checkbox.Group>;
  },
};

export const wigetList: Array<WigetItemProps> = [
  {
    icon: <InputIcon />,
    name: "单行输入",
    schemaInfo: {
      type: "input",
      props: {
        id: "",
      },
    },
  },
  {
    icon: <TextareaIcon />,
    name: "多行输入",
    schemaInfo: {
      type: "textarea",
      props: {},
    },
  },
  {
    icon: <NumberIcon />,
    name: "数字输入",
    schemaInfo: {
      type: "number",
      props: {},
    },
  },
  {
    icon: <SwitchIcon></SwitchIcon>,
    name: "开关",
    schemaInfo: {
      type: "switch",
      props: {},
    },
  },
  {
    icon: <RadioIcon></RadioIcon>,
    name: "单选",
    schemaInfo: {
      type: "radio",
      props: {
        options: [
          {
            label: "Apple",
            value: "Apple",
          },
        ],
      },
    },
  },
  {
    icon: <CheckboxIcon></CheckboxIcon>,
    name: "多选",
    schemaInfo: {
      type: "checkbox",
      props: {
        options: [
          {
            label: "Apple",
            value: "Apple",
          },
        ],
      },
    },
  },
];
