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
      title: "标签",
      dataIndex: "label",
      valueType: "input",
      formItemProps: {
        tooltip: "label",
      }
    },
    {
      title: "字段索引",
      dataIndex: "name",
      valueType: "input",
      formItemProps: {
        tooltip: "name",
      }
    },
    {
      title: "必需",
      dataIndex: "required",
      valueType: "switch",
      formItemProps: {
        tooltip: "required",
      }
    },
    {
      title: "未填提示",
      dataIndex: "requireMessage",
      valueType: "input",
      formItemProps: {
        tooltip: "requireMessage",
      }
    },
];

export const InputLikeColumns: any = [
  {
    title: "缺省值",
    dataIndex: "placeholder",
    valueType: "input",
    formItemProps: {
      tooltip: "placeholder",
    }
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


