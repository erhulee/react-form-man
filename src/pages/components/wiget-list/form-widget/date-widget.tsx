import { DatePicker, TimePicker } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseColumns,
  createTitleDividerColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { overLoadColumns } from "../share/overLoadColumns";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";

export type DateActor = BaseActor & {
  type: WidgetType.Date;
  props: BaseOptions & {
    // disabledTime?: string;
    // format?: string;
    // initialValue?: Date;
  };
};

export const dateWidgetKit: FormWidgetKit = {
  columns: overLoadColumns([
    ...createTitleDividerColumns("通用配置"),
    ...baseColumns,
    ...createTitleDividerColumns("专属配置", true),

    {
      title: "类型",
      dataIndex: "picker",
      valueType: "select",
      fieldProps: {
        options: [
          { label: "date", value: "date" },
          { label: "week", value: "week" },
          { label: "month", value: "month" },
          { label: "quarter", value: "quarter" },
          { label: "year", value: "year" },
        ],
      },
    },
    {
      title: "弹出位置",
      dataIndex: "placement",
      valueType: "select",
      fieldProps: {
        options: [
          { label: "bottomLeft", value: "bottomLeft" },
          { label: "bottomRight", value: "bottomRight" },
          { label: "topLeft", value: "topLeft" },
          { label: "topRight", value: "topRight" },
        ],
      },
    },
  ]),
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <DatePicker ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <DatePicker {...props} />;
  },
};
