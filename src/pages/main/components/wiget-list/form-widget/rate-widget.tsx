import { Input, Rate } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";

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
    console.log("props:", props);
    const formItemProps = clearFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
            <Rate ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Rate {...props}></Rate>;
  },
};
