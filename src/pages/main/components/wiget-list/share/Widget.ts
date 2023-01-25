import { InputActor, TextareaActor, NumberActor, SwitchActor, RadioActor, CheckboxActor, DividerActor } from "../form-widget";

export enum WidgetType {
  Input = "input",
  Textarea = "textarea",
  Number = "number",
  Switch = "switch",
  Radio = "radio",
  Checkbox = "checkbox",

  Divider = "divider"
}
export interface BaseActor {
    id?: string // 保证唯一
    type: WidgetType
    props: any
}
export const baseColumns: any = [
    {
      title: "label",
      dataIndex: "label",
      valueType: "input",
    },
    {
      title: "name",
      dataIndex: "name",
      valueType: "input",
    },
    {
      title: "placeholder",
      dataIndex: "placeholder",
      valueType: "input",
    },
    {
      title: "required",
      dataIndex: "required",
      valueType: "switch",
    },
    {
      title: "requireMessage",
      dataIndex: "requireMessage",
      valueType: "input",
    },
];

export const OptionLikeColumns: any = [
    {
        title: "options",
        dataIndex: "options",
        valueType: 'optionInput',
    }
]

export type Actor = InputActor | TextareaActor | NumberActor | SwitchActor | RadioActor | CheckboxActor | DividerActor;


