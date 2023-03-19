import { Input, Rate } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";

export type RateActor = BaseActor & {
  type: WidgetType.Rate;
  props: {
    count?: number;
    allowHalf?: boolean;
    allowClear?: boolean;
  };
};

export const rateWidgetKit: FormWidgetKit = {
  columns: [
    ...baseColumns,
    {
      title: "个数",
      dataIndex: "count",
      valueType: "digit",
    },
    {
      title: "是否可以半星",
      dataIndex: "allowHalf",
      valueType: "switch",
    },
    {
      title: "是否可以清除",
      dataIndex: "allowClear",
      valueType: "switch",
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
            <Rate ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Rate {...props}></Rate>;
  },
};
