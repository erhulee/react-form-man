import { schema2ActorCreator } from "../../constant";
import DragItem from "./draw";
import { Form } from "antd";
import { ActorActions } from "../../../../store/actorStore";
import { cloneDeep } from "lodash-es";
import { Actor } from "../wiget-list/BaseWidget";

type ActorItemProps = {
  actor: Actor;
  index: number;
  id: string;
};

function ActorItem(props: ActorItemProps) {
  const { actor, index, id } = props;
  const Item = schema2ActorCreator[props.actor.type];
  const itemProps = cloneDeep(actor.props);
  const { label, name, required } = itemProps;

  delete itemProps.label;
  delete itemProps.name;
  delete itemProps.required;

  console.log("actorItem Rerender:", itemProps);
  return (
    <DragItem
      onClick={() => ActorActions.activeActor(id)}
      index={index}
      id={id}
      className={`p-2 bg-slate-200 mt-2 `}
    >
      <Form.Item label={label || "标题"} name={name} required={required}>
        <Item {...itemProps}></Item>
      </Form.Item>
    </DragItem>
  );
}

export default ActorItem;
