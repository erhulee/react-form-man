import { Radio } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseCompColumns,
  baseFormItemColumns,
  createEnumColumn,
  OptionLikeColumns,
  WidgetType,
} from "../share/Widget";

import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormItemProps } from "../../../../code-generator/splitPropsUtil";

// 和 Radio.Group 对齐
// [√]size	大小，只对按钮样式生效	large | middle | small	-
// [√]options	以配置形式设置子元素	string[] | number[] | Array<{ label: ReactNode; value: string; disabled?: boolean; }>	-

// [√]buttonStyle	RadioButton 的风格样式，目前有描边和填色两种风格	outline | solid	outline
// TODO: 需要check
// name	RadioGroup 下所有 input[type="radio"] 的 name 属性	string	-
// [√]optionType	用于设置 Radio options 类型	default | button	default	4.4.0

// 依赖 code 代码输入框
// onChange	选项变化时的回调函数	function(e:Event)

// 不需要实现的
// disabled	禁选所有子单选器	boolean	false
// value	用于设置当前选中的值	any	-
// defaultValue	默认选中的值	any	-

export type RadioActor = BaseActor & {
  type: WidgetType.Radio;
  props: BaseOptions & {
    options: Array<{ label: string; value: string }>;
  };
};
export const radioWidgetKit: FormWidgetKit = {
  columns: [
    ...baseFormItemColumns,
    ...baseCompColumns,
    ...OptionLikeColumns,
    // createEnumColumn("buttonStyle", "风格样式", ["outline", "solid"]),
    createEnumColumn("optionType", "Radio类型", ["default", "button"]),
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Radio.Group ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    const compProps = props.props;
    const { remainProps } = getFormItemProps(compProps);
    return <Radio.Group {...remainProps}></Radio.Group>;
  },
};
