import { InputActor, TextareaActor, NumberActor, SwitchActor, RadioActor, CheckboxActor, DividerActor, RateActor, SliderActor, TextActor } from "../form-widget";
import { SelectActor } from "../form-widget/select-widget";

export enum WidgetType {
  Input = "input",
  Textarea = "textarea",
  Number = "number",
  Switch = "switch",
  Radio = "radio",
  Checkbox = "checkbox",

  Rate = "rate",
  Slider = "slider",
  Select = "select",

  Text = "text",
  Divider = "divider"

}
export interface BaseActor {
    id?: string // 保证唯一
    type: WidgetType
    props: {
      defaultValue?: any
      disabled?: boolean
      name?: string
      label?: string 
    }
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

export const InputLikeColumns: any = [
  {
    title: "placeholder",
    dataIndex: "placeholder",
    valueType: "input",
  },
]

export const OptionLikeColumns: any = [
    {
        title: "options",
        dataIndex: "options",
        valueType: 'optionInput',
    }
]

export type Actor = InputActor | TextareaActor | NumberActor | SwitchActor | RadioActor | CheckboxActor 
  | DividerActor | RateActor | SliderActor | SelectActor | TextActor; 


