export interface BaseActor {
    id?: string // 保证唯一
    type: "input" | "textarea" | "number" | "switch" | "radio",
    props: any
}


import { BaseOptions } from "../actor-setting/type"
const baseColumns: any = [
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

const OptionLickColumns: any = [
    {
        title: "options",
        dataIndex: "options",
        valueType: 'optionInput',
    }
]

export type InputActor = BaseActor & {
    type : "input",
    props: BaseOptions
}
export const InputColumns= [
    ... baseColumns
]

export type TextareaActor = BaseActor & {
    type : "textarea",
    props: BaseOptions
}
export const TextareaColumns = [
    ... baseColumns
]

export type NumberActor = BaseActor & {
    type : "number",
    props: BaseOptions
}
export const NumberColumns = [
    ... baseColumns
] 


export type SwitchActor = BaseActor & {
    type: "switch",
    props: BaseOptions,
}
export const SwitchColumns = [
    ... baseColumns
]

export type RadioActor = BaseActor & {
    type : "radio",
    props: BaseOptions
}
export const RadioColumns = [
    ... baseColumns,
    ... OptionLickColumns
]

export type CheckboxActor = BaseActor & {
    type: "checkbox",
    props: BaseOptions
}
export const CheckboxColumns = [
    ... baseColumns,
    ... OptionLickColumns
]





export type Actor = InputActor | TextareaActor | NumberActor | SwitchActor | RadioActor | CheckboxActor;

export const columnsMap = {
    "input":    InputColumns,
    "textarea": TextareaColumns,
    "number":   NumberColumns,
    "switch":   SwitchColumns,
    "radio":    RadioColumns,
    "checkbox": CheckboxColumns
}

