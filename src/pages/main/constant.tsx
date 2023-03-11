import {
  CalendarIcon,
  CardIcon,
  CellIcon,
  CheckboxIcon,
  ColContainerIcon,
  HorizontalLineIcon,
  ImageIcon,
  InputIcon,
  NumberIcon,
  RadioIcon,
  RateIcon,
  RowContainerIcon,
  SelectIcon,
  SliderIcon,
  SwitchIcon,
  TextareaIcon,
  TextIcon,
  TimeIcon,
} from "../../Icons";
import { WidgetItemProps } from "./components/wiget-list";
import { CardContainerWidgetKit, RowContainerWidgetKit } from "./components/wiget-list/container-widgets";
import { CellContainerWidgetKit } from "./components/wiget-list/container-widgets/cell-container";
import { RootWidgetKit } from "./components/wiget-list/container-widgets/root";
import { inputWidgetKit, TextareaWidgetKit, NumberWidgetKit, switchWidgetKit, radioWidgetKit,
checkboxWidgetKit, dividerWidgetKit, rateWidgetKit, sliderWidgetKit, selectWidgetKit, textWidgetKit, timeWidgetKit, dateWidgetKit, imageWidgetKit,  } from "./components/wiget-list/form-widget";
import { ContainerWidgetKit, FormWidgetKit } from "./components/wiget-list/share/type";
import { WidgetType } from "./components/wiget-list/share/Widget";
export const widgetKitMap: {
  [index: string]: FormWidgetKit | ContainerWidgetKit
} = {
  "input":    inputWidgetKit,
  "textarea": TextareaWidgetKit,
  "number":   NumberWidgetKit,
  "switch":   switchWidgetKit,
  "radio":    radioWidgetKit,
  "checkbox": checkboxWidgetKit,
  "divider": dividerWidgetKit,
  "rate": rateWidgetKit,
  "slider": sliderWidgetKit,
  "select": selectWidgetKit,
  "text": textWidgetKit,
  "time": timeWidgetKit,
  "date": dateWidgetKit,
  "image": imageWidgetKit,

  "cell": CellContainerWidgetKit,
  "root": RootWidgetKit,
  [WidgetType.Row]:RowContainerWidgetKit,
  [WidgetType.Card]: CardContainerWidgetKit
}
export const formList: Array<WidgetItemProps> = [
  {
    icon: <InputIcon />,
    name: "单行输入",
    schemaInfo: {
      type: WidgetType.Input,
      props: {
        label: "标签",
      },
    },
  },
  {
    icon: <TextareaIcon />,
    name: "多行输入",
    schemaInfo: {
      type: WidgetType.Textarea,
      props: {
        label: "标签",
      },
    },
  },
  {
    icon: <NumberIcon />,
    name: "数字输入",
    schemaInfo: {
      type: WidgetType.Number,
      props: {
        label: "标签",
      },
    },
  },
  {
    icon: <SwitchIcon></SwitchIcon>,
    name: "开关",
    schemaInfo: {
      type: WidgetType.Switch,
      props: {
        label: "标签",
      },
    },
  },
  {
    icon: <RadioIcon></RadioIcon>,
    name: "单选",
    schemaInfo: {
      type: WidgetType.Radio,
      props: {
        label: "标签",
        options: [
          {
            label: "Apple",
            value: "Apple",
          },
        ],
      },
    },
  },
  {
    icon: <CheckboxIcon></CheckboxIcon>,
    name: "多选",
    schemaInfo: {
      type: WidgetType.Checkbox,
      props: {
        label: "标签",
        options: [
          {
            label: "Apple",
            value: "Apple",
          },
        ],
      },
    },
  },
  {
    icon: <RateIcon></RateIcon>,
    name: "评分",
    schemaInfo: {
      type: WidgetType.Rate,
      props: {
        label: "标签",
        count: 5,
        allowClear: false,
        allowHalf: false,
      },
    },
  },
  {
    icon: <SliderIcon></SliderIcon>,
    name: "滑动条",
    schemaInfo: {
      type: WidgetType.Slider,
      props: {
        label: "标签",
      },
    },
  },
  {
    icon: <SelectIcon></SelectIcon>,
    name: "下拉选择",
    schemaInfo: {
      type: WidgetType.Select,
      props: {
        label: "标签",
        options: [
          {
            label: "苹果",
            value: "apple",
          },
        ],
      },
    },
  },
  {
    icon: <TimeIcon></TimeIcon>,
    name: "时间",
    schemaInfo: {
      type: WidgetType.Time,
      props: {
        label: "标签",
        // disabledTime: `
        // //type DisabledTime = (now: Dayjs) => {
        // //  disabledHours?: () => number[];
        // //  disabledMinutes?: (selectedHour: number) => number[];
        // //  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
        // //};`,
        format: "HH:mm:ss",
      },
    },
  },
  {
    icon: <CalendarIcon></CalendarIcon>,
    name: "日期",
    schemaInfo: {
      type: WidgetType.Date,
      props: {
        label: "标签",
      },
    },
  },
];

export const containerList: Array<WidgetItemProps> = [
  {
    icon: <CellIcon />,
    name: "单元格容器",
    schemaInfo: {
      type: WidgetType.Cell,
      props: {
        // id: "",
      },
    }, 
  },
  // {
  //   icon: <RowContainerIcon />,
  //   name: "纵向排列",
  //   schemaInfo: {
  //     type: WidgetType.Row,
  //     props: {
  //       // id: "",
  //     },
  //   },
  // },
  {
    icon: <ColContainerIcon />,
    name: "横向排列",
    schemaInfo: {
     type: WidgetType.Row,
      props: {},
    },
  },
  {
    icon: <CardIcon></CardIcon>,
    name: "卡片容器",
    schemaInfo: {
      type: WidgetType.Card,
      props: {},
    },
  },
];

export const decoratorList: Array<WidgetItemProps> = [
  {
    icon: <HorizontalLineIcon></HorizontalLineIcon>,
    name: "分割线",
    schemaInfo: {
      type: WidgetType.Divider,
      props: {
        type: "horizontal" as const,
      },
    },
  },
  {
    icon: <TextIcon></TextIcon>,
    name: "文本",
    schemaInfo: {
      type: WidgetType.Text,
      props: {
        content: "",
      },
    },
  },
  {
    icon: <ImageIcon></ImageIcon>,
    name: "图片",
    schemaInfo: {
      type: WidgetType.Image,
      props: {
        content: "",
      },
    },
  }
];
