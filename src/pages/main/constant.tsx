import {
  CheckboxIcon,
  HorizontalLineIcon,
  InputIcon,
  NumberIcon,
  RadioIcon,
  RateIcon,
  SelectIcon,
  SliderIcon,
  SwitchIcon,
  TextareaIcon,
  TextIcon,
  TimeIcon,
} from "../../Icons";
import { WigetItemProps } from "./components/wiget-list";
import { WidgetType } from "./components/wiget-list/share/Widget";

export const wigetList: Array<WigetItemProps> = [
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
];

// export const containerList: Array<WigetItemProps> = [
//   {
//     icon: <RowContainerIcon />,
//     name: "纵向排列",
//     schemaInfo: {
//       type: "input",
//       props: {
//         id: "",
//       },
//     },
//   },
//   {
//     icon: <ColContainerIcon />,
//     name: "横向排列",
//     schemaInfo: {
//       type: "textarea",
//       props: {},
//     },
//   },
//   {
//     icon: <CardIcon></CardIcon>,
//     name: "卡片容器",
//     schemaInfo: {
//       type: "textarea",
//       props: {},
//     },
//   },
// ];

export const decoratorList: Array<WigetItemProps> = [
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
];
