import { cloneDeep } from "lodash-es";
import { FormWigetKit } from "../share/type";
import { BaseActor, WidgetType } from "../share/Widget";

export type TextActor = BaseActor & {
  type: WidgetType.Text;
  props: {
    content: string;
  };
};

export const textWigetKit: FormWigetKit = {
  columns: [
    {
      title: "内容",
      dataIndex: "content",
      valueType: "input",
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    return `
    <div>${props.content}</div>
    `;
  },
  createInstance: (props: TextActor["props"]) => {
    return <div>{props.content}</div>;
  },
};
