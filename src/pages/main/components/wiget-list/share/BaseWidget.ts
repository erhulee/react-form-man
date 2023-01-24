import { InputActor, TextareaActor, NumberActor, SwitchActor, RadioActor, CheckboxActor } from "../form-widget";

export interface BaseActor {
    id?: string // 保证唯一
    type: "input" | "textarea" | "number" | "switch" | "radio",
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

export type Actor = InputActor | TextareaActor | NumberActor | SwitchActor | RadioActor | CheckboxActor;


