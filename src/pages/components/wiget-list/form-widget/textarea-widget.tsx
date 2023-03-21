import { Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseCompColumns,
  baseFormItemColumns,
  InputLikeColumns,
  WidgetType,
} from "../share/Widget";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormItemProps } from "../../../../code-generator/splitPropsUtil";

export type TextareaActor = BaseActor & {
  type: WidgetType.Textarea;
  props: BaseOptions;
};

// [√]allowClear	可以点击清除图标删除内容	boolean	false
// [√]autoSize	自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }	boolean | object	false
// [√]bordered	是否有边框	boolean	true	4.5.0
// [x]defaultValue	输入框默认内容	string	-
// [√]maxLength	内容最大长度	number	-	4.7.0
// [√]showCount	是否展示字数	boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => string }	false	4.7.0 formatter: 4.10.0 info.value: 4.23.0
// [x]value	输入框内容	string	-
// [x]onPressEnter	按下回车的回调	function(e)	-
// [x]onResize	resize 回调	function({ width, height })	-

// TODO: autoSize 支持 object 输入，后续看下
export const TextareaWidgetKit: FormWidgetKit = {
  columns: [
    ...baseFormItemColumns,
    ...baseCompColumns,
    ...InputLikeColumns,
    {
      title: "自适应高度",
      dataIndex: "autoSize",
      valueType: "switch",
      formItemProps: {
        tooltip: "autoSize",
      },
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Input.TextArea ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    const compProps = props.props;
    const { remainProps } = getFormItemProps(compProps);
    return <Input.TextArea {...remainProps}></Input.TextArea>;
  },
};
