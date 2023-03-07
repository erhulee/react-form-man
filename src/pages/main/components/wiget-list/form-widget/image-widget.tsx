import { Image } from "antd";
import { cloneDeep } from "lodash-es";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { BaseActor, WidgetType } from "../share/Widget";

export type ImageActor = BaseActor & {
  type: WidgetType.Image
  props: {
    // type: "horizontal" | "vertical";
  };
};

export const imageWidgetKit: FormWidgetKit = {
  columns: [
    {
      title: "alt",
      dataIndex: "alt",
      valueType: "input",
      formItemProps:{
          tooltip: "图片描述"
      }
    },
    {
        title: "alt",
        dataIndex: "alt",
        valueType: "input",
        formItemProps:{
            tooltip: "图片描述"
        }
    },
    {
        title: "alt",
        dataIndex: "alt",
        valueType: "input",
        formItemProps:{
            tooltip: "图片描述"
        }
    },

  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    return ` <Image {...props} ${splitProps(props)}/>`;
  },
  createInstance: (props: any) => {
    return  <Image {...props}/>
  },
};
