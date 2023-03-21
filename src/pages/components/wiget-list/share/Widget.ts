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
// 配置 formItem 的选项 
/*
// 全局配置
[√]colon	配合 label 属性使用，表示是否显示 label 后面的冒号	boolean	true	
[√]labelAlign	标签文本对齐方式	left | right	right	

[√]label	label 标签的文本	ReactNode	-	
[√]labelCol	label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}。你可以通过 Form 的 labelCol 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准	object	-	
[√]initialValue	设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准	string	-	4.2.0
[√]tooltip	配置提示信息	ReactNode | TooltipProps & { icon: ReactNode }	-	4.7.0
[√]required	必填样式设置。如不设置，则会根据校验规则自动生成	boolean	false	

[√]name	字段名，支持数组	NamePath	-	
rules	校验规则，设置字段的校验逻辑。点击此处查看示例	Rule[]	-	

messageVariables	默认验证字段的信息	Record<string, string>	-	4.7.0
[√]validateFirst	当某一规则校验不通过时，是否停止剩下的规则的校验。设置 parallel 时会并行校验	boolean | parallel	false	parallel: 4.5.0 -> 暂时只支持 boolean


//TODO
dependencies	设置依赖字段，说明见下	NamePath[]	-	
trigger	设置收集字段值变更的时机。点击此处查看示例	string	onChange	
shouldUpdate	自定义字段更新逻辑，说明见下	boolean | (prevValue, curValue) => boolean	false	
normalize	组件获取值后进行转换，再放入 Form 中。不支持异步	(value, prevValue, prevValues) => any	-	
extra	额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。	ReactNode	-	
getValueFromEvent	设置如何将 event 的值转换成字段值	(..args: any[]) => any	-	
getValueProps	为子元素添加额外的属性	(value: any) => any	-	4.2.0




//暂不实现
valuePropName	子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效	string	value	
hasFeedback	配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用	boolean	false	
help	提示信息，如不设置，则会根据校验规则自动生成	ReactNode	-	
hidden	是否隐藏字段（依然会收集和校验字段）	boolean	false	4.4.0
htmlFor	设置子元素 label htmlFor 属性	string	-	
wrapperCol	需要为输入控件设置布局样式时，使用该属性，用法同 labelCol。你可以通过 Form 的 wrapperCol 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准	object	-	
noStyle	为 true 时不带样式，作为纯字段控件使用	boolean	false	
preserve	当字段被删除时保留字段值	boolean	true	4.4.0
validateStatus	校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'	string	-	
validateTrigger	设置字段校验的时机	string | string[]	onChange	


*/
export const baseFormItemColumns = [
  {
    valueType: "title",
    fieldProps:{
      title: "FormItem 配置项"
    }
  },
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
  // {
  //   title: "未填提示",
  //   dataIndex: "requireMessage",
  //   valueType: "input",
  //   formItemProps: {
  //     tooltip: "requireMessage",
  //   }
  // },


  createNumberColumn(["labelCol","span"], "标签宽度"),
  createStringColumn("initialValue", "初始值"),

  createBooleanColumn("validateFirst", "失败时中止", "当某一规则校验不通过时，是否停止剩下的规则的校验"),
  {
    title: "校验规则",
    dataIndex: "rules",
    valueType: "codeEditor"
  }
]

// 配置 formItem 中真正组件的选项 
export const baseCompColumns = [
  {
    valueType: "title",
    fieldProps:{
      title: "组件配置项"
    }
  },
  {
    title: "尺寸",
    dataIndex: "size",
    valueType: "radio",
    formItemProps: {
      tooltip: "size",
    },
    fieldProps: {
      options: [
        { label: "小", value: "small" },
        { label: "中", value: "middle" },
        { label: "大", value: "large" },
      ],
    },
  },
]


export const InputLikeColumns: any = [
  {
    title: "缺省值",
    dataIndex: "placeholder",
    valueType: "input",
    formItemProps: {
      tooltip: "placeholder",
    }
  },
  {
    title: "清除图标",
    dataIndex: "allowClear",
    valueType: "switch",
    formItemProps: {
      tooltip: "allowClear",
    },
  },
  {
    title: "边框",
    dataIndex: "bordered",
    valueType: "switch",
    formItemProps: {
      tooltip: "bordered",
    },
  },
  {
    title: "最大长度",
    dataIndex: "maxLength",
    valueType: "digit",
    formItemProps: {
      tooltip: "maxLength",
    },
  },
  {
    title: "展示字数",
    dataIndex: "showCount",
    valueType: "switch",
    formItemProps: {
      tooltip: "showCount",
    },
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
      WidgetType.Date,
      WidgetType.Image
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

export function getFormItemValuePropName(type: WidgetType){
  const defaultMap:Partial< Record<  WidgetType, string> >= {
    switch: "checked",
    image: 'fileList'
  }

  if(defaultMap[type]) return defaultMap[type];
  return null
}

export function createBooleanColumn(dataIndex:string, title:string, tooltip = dataIndex){
  return {
    title,
    dataIndex,
    valueType: "switch",
    formItemProps: {
      tooltip,
    },
  }
}

export function createNumberColumn(dataIndex:string | string[], title:string, tooltip = dataIndex){
  return {
    title,
    dataIndex,
    valueType: "digit",
    formItemProps: {
      tooltip,
    },
    fieldProps:{
      max: Number.MAX_SAFE_INTEGER,
      min: Number.MIN_SAFE_INTEGER
    }
  }
}

export function createStringColumn(dataIndex:string, title:string, tooltip = dataIndex){
  return {
    title,
    dataIndex,
    valueType: "input",
    formItemProps: {
      tooltip,
    },
  }
}

export function createTitleColumn(title:string){
  return {
    valueType: "title",
    fieldProps:{
      title,
    }
  }
}

export function createEnumColumn(dataIndex:string, title:string, enums: string[], tooltip = dataIndex){
  return {
    title,
    dataIndex,
    valueType: "radio",
    formItemProps: {
      tooltip,
    },
    fieldProps: {
      options: enums.map((e)=>({label: e, value: e}))
   
    },
  }
}