import { Input, Switch } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import { BaseActor, baseColumns } from "../share/BaseWidget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWigetKit } from "../share/type";

export type SwitchActor = BaseActor & {
  type: "switch";
  props: BaseOptions;
};

export const switchWigetKit: FormWigetKit = {
  columns: [...baseColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    return `
        <Form.Item ${splitProps(formItemProps)}>
          <Switch ${splitProps(props)}/>
        </Form.Item>
      `;
  },
  createInstance: (props: any) => {
    return <Switch {...props}></Switch>;
  },
};
