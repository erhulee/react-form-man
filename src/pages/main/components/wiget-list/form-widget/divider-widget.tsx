import { Divider } from "antd";
import { cloneDeep } from "lodash-es";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWigetKit } from "../share/type";
import { BaseActor, WidgetType } from "../share/Widget";

export type DividerActor = BaseActor & {
  type: WidgetType.Divider;
  props: {
    type: "horizontal" | "vertical";
  };
};

export const dividerWigetKit: FormWigetKit = {
  columns: [
    {
      title: "dashed",
      dataIndex: "dashed",
      valueType: "switch",
    },
    {
      title: "type",
      dataIndex: "type",
      valueType: "select",
      fieldProps: {
        options: [
          {
            label: "横向",
            value: "horizontal",
          },
          {
            label: "纵向",
            value: "vertical",
          },
        ],
      },
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    return `<Divider ${splitProps(props)}/>`;
  },
  createInstance: (props: any) => {
    return <Divider {...props}></Divider>;
  },
};
