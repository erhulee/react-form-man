import { Switch } from "antd";
import { cloneDeep } from "lodash-es";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseCompColumns,
  baseFormItemColumns,
  createBooleanColumn,
  WidgetType,
} from "../share/Widget";

import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";

import { getFormProps } from "../../../../code-generator/splitPropsUtil";

export type SwitchActor = BaseActor & {
  type: WidgetType.Switch;
  props: BaseOptions;
};

// [√]autoFocus	组件自动获取焦点	boolean	false
// [√]size	开关大小，可选值：default small	string	default

// 依赖 code 代码输入框
// unCheckedChildren	非选中时的内容	ReactNode	-
// checkedChildren	选中时的内容	ReactNode	-
// className	Switch 器类名	string	-

// 不需要实现的
// disabled	是否禁用	boolean	false
// onChange	变化时的回调函数	function(checked: boolean, event: Event)	-
// onClick	点击时的回调函数	function(checked: boolean, event: Event)
// checked	指定当前是否选中	boolean	false
// loading	加载中的开关	boolean	false
// defaultChecked	初始是否选中	boolean	false

export const switchWidgetKit: FormWidgetKit = {
  columns: [
    ...baseFormItemColumns,
    ...baseCompColumns,
    createBooleanColumn("autoFocus", "获取焦点"),
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);

    return `<Form.Item ${splitProps(formItemProps)} >
          <Switch ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    const compProps = props.props;
    const { remainProps } = getFormProps(compProps);
    return <Switch {...remainProps}></Switch>;
  },
};
