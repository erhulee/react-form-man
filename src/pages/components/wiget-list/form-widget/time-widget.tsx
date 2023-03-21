import { TimePicker } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseFormItemColumns,
  createTitleDividerColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { overLoadColumns } from "../share/overLoadColumns";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";

export type TimeActor = BaseActor & {
  type: WidgetType.Time;
  props: BaseOptions & {
    disabledTime?: string;
    format?: string;
    initialValue?: Date;
  };
};

export const timeWidgetKit: FormWidgetKit = {
  columns: [
    ...createTitleDividerColumns("通用配置"),
    ...baseFormItemColumns,
    ...createTitleDividerColumns("专属配置", true),
    {
      title: "是否有边框",
      dataIndex: "bordered",
      valueType: "switch",
    },
    {
      title: "初始值",
      dataIndex: "initialValue",
      valueType: "dateTime",
    },
    {
      title: "格式化",
      dataIndex: "format",
      valueType: "input",
    },
    {
      title: "分钟选项间隔",
      dataIndex: "minuteStep",
      valueType: "digit",
    },
    {
      title: "小时选项间隔",
      dataIndex: "hourStep",
      valueType: "digit",
    },
    {
      title: "秒选项间隔",
      dataIndex: "secondStep",
      valueType: "digit",
    },
    {
      title: "禁用时段",
      dataIndex: "disabledTime",
      valueType: "codeEditor",
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <TimePicker ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <TimePicker {...props} />;
  },
};
