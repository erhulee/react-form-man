import { cloneDeep } from "lodash-es";
import { FormWidgetKit } from "../share/type";
import { BaseActor, WidgetType } from "../share/Widget";

export type TextActor = BaseActor & {
  type: WidgetType.Text;
  props: {
    content: string;
  };
};

export const textWidgetKit: FormWidgetKit = {
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
  createInstance: (props: any) => {
    return <div>{props.content}</div>;
  },
};
