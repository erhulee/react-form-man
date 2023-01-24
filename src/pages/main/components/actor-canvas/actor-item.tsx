import DragItem from "./draw";
import { Form } from "antd";
import { ActorActions } from "../../../../store/actorStore";
import { cloneDeep } from "lodash-es";
import { Actor } from "../wiget-list/share/BaseWidget";
import { wigetKitMap } from "../wiget-list/form-widget";
import clearFormItemProps from "../wiget-list/share/clearFormItemProps";

type ActorItemProps = {
  actor: Actor;
  index: number;
  id: string;
};

function ActorItem(props: ActorItemProps) {
  const { actor, index, id } = props;
  const wigetKit = wigetKitMap[props.actor.type];
  const nativeProps = cloneDeep(actor.props);
  const formItemProps = clearFormItemProps(nativeProps);
  const Item = wigetKit.createInstance;

  return (
    <DragItem
      onClick={() => ActorActions.activeActor(id)}
      index={index}
      id={id}
      className={`p-2 bg-slate-200 mt-2 `}
    >
      <Form.Item {...formItemProps}>
        <Item {...nativeProps}></Item>
      </Form.Item>
    </DragItem>
  );
}

export default ActorItem;
