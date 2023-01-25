import { Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWigetKit } from "../share/type";

export type InputActor = BaseActor & {
  type: WidgetType.Input;
  props: BaseOptions;
};

export const inputWigetKit: FormWigetKit = {
  columns: [...baseColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Input ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Input {...props}></Input>;
  },
};
