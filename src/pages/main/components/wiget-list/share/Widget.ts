import { CardContainerActor, CellActor, RowContainerActor } from "../container-widgets";
import { InputActor, TextareaActor, NumberActor, SwitchActor, RadioActor, CheckboxActor, DividerActor, RateActor, SliderActor, TextActor,  TimeActor, DateActor, ImageActor } from "../form-widget";
import { SelectActor } from "../form-widget/select-widget";

export enum WidgetCategory {
  Root,
  Container,
  Form,
  Decorator
}
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
  Time = "time",
  Date = "date",

  Text = "text",
  Divider = "divider",
  Image = "image",

  Root = "root",
  Cell = "cell",
  Row = "row",
  Card = "card"


}
export interface BaseActor {
    id?: string // 保证唯一
    type: WidgetType
    props: {
      defaultValue?: any
      disabled?: boolean
      name?: string
      label?: string 

      parent?: BaseActor
      children?: BaseActor[]
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
    {
      title: "tooltip提示",
      dataIndex: "tooltip",
      valueType: "input",
    },
    {
      title: "初始值",
      dataIndex: "initialValue",
      valueType: "input"
    },
    {
      title: "禁用",
      dataIndex: "disabled",
      valueType: "switch"
    }
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

export function createTitleDividerColumns(title: string, withDivier?:boolean){
  if(withDivier){
    return [
      {
        valueType: "divider"
      }, 
      {
        valueType: "title",
        fieldProps:{
          title: title
        }
      }
    ]
  }
  return [
    {
      valueType: "title",
      fieldProps:{
        title: title
      }
    }
  ]

}

export type Actor =  InputActor | TextareaActor | NumberActor | SwitchActor | RadioActor | CheckboxActor 
  | DividerActor | RateActor | SliderActor | SelectActor | TextActor | TimeActor | DateActor | ImageActor
  | CellActor | RowContainerActor | CardContainerActor;  

export function isFormWidget(type: WidgetType){
    const formWidgets = [ 
      WidgetType.Input,
      WidgetType.Textarea,
      WidgetType.Number,
      WidgetType.Switch,
      WidgetType.Radio,
      WidgetType.Checkbox,
      WidgetType.Rate,
      WidgetType.Slider,
      WidgetType.Select,
      WidgetType.Time,
      WidgetType.Date
    ];
    return formWidgets.includes(type)
}

export function isContainerWidget(type: WidgetType){
    const containerWidget = [ 
      WidgetType.Cell, WidgetType.Root,
      WidgetType.Card, WidgetType.Row
    ];
    return containerWidget.includes(type);
}

export function getWidgetCategory(type: WidgetType):WidgetCategory{
  if(type == WidgetType.Root) return WidgetCategory.Root;
  if(isFormWidget(type)) return WidgetCategory.Form;
  if(isContainerWidget(type)) return WidgetCategory.Container;
  return WidgetCategory.Decorator;
}