import { ActorStore } from "../../../../store/actorStore";
const type2ValueType = {
  input: "text",
  textarea: "textarea",
  number: "digit",
  switch: "switch",
  radio: "radio",
  checkbox: "checkbox",
  divider: () => {},
  rate: "rate",
  //TODO: 存疑
  slider: "progress",
  select: "select",
  text: () => {},
  time: () => "time",
  date: () => "date",
};
function generateAntdProSchema(store?: ActorStore["actors"]) {
  const result = store?.map((actor) => {
    const name = actor.props.name;
    const type = actor.type;
    const label = actor.props.label;
    let valueType = type2ValueType[type];
    // 跳过装饰性组件，谁敢写打死他！！
    if (typeof valueType == "function") {
      const result = valueType();
      if (result == undefined) return;
      valueType = result;
    }
    return {
      title: label,
      dataIndex: name,
      valueType: valueType,
    };
  });
  return JSON.stringify(result);
}

export default generateAntdProSchema;
