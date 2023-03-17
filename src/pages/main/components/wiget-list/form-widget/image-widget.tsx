import { Upload  } from "antd";
import { cloneDeep } from "lodash-es";
import { getFormProps } from "../../../../../code-generator/splitPropsUtil";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";

export type ImageActor = BaseActor & {
  type: WidgetType.Image
  props: {
    // type: "horizontal" | "vertical";
  };
};

export const imageWidgetKit: FormWidgetKit = {
  columns: [
    ...baseColumns,
    {
      title: "",
      dataIndex: "",
      valueType: "dividerWithTitle",
      formItemProps:{
          tooltip: "action"
      },
      fieldProps:{
        content: "高级设置"
      }
    
    },
    {
      title: "上传地址",
      dataIndex: "action",
      valueType: "input",
      formItemProps:{
          tooltip: "action"
      }
    },
    {
        title: "多选文件",
        dataIndex: "multiple",
        valueType: "switch",
        formItemProps:{
            tooltip: "multiple",
        },
    },
    {
      title: "上传数量",
      dataIndex: "maxCount",
      valueType: "digit",
      formItemProps:{
          tooltip: "maxCount",
          initialValue: 1
      },
      fieldProps:{
        min: 1
      }
  },
  {
    title: "接受类型",
    dataIndex: "accept",
    valueType: "select",
    formItemProps:{
        tooltip: "accept"
    },
    fieldProps: {
      mode: "multiple",
      options: [{
        label: "jpeg",
        value: "jpeg"
      },
      {
        label: "jpg",
        value: "jpg",
        
      },{
        label: "png",
        value: "png",
        
      },{
        label: "gif",
        value: "gif",
        
      }]
    }
  
},

    // {
    //     title: "alt",
    //     dataIndex: "alt",
    //     valueType: "input",
    //     formItemProps:{
    //         tooltip: "图片描述"
    //     }
    // },

  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const {formItemProps,remainProps} = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Upload  ${splitProps(remainProps)} >
          <div className=" bg-blue-50 border-blue-200 border-1 border-solid w-28 h-28  flex justify-center items-center" >
          <div className=" text-slate-500" >点击上传</div>
        </div>
      </Upload>
  </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Upload {...props} >
        <div className=" bg-blue-50 border-blue-200 border-1 border-solid w-28 h-28  flex justify-center items-center" >
              <div className=" text-slate-500" >点击上传</div>
            </div>
    </Upload>
     
  },
};
