import DragItem from "./draw";
import { Form } from "antd";
import { ActorActions } from "../../../../store/actorStore";
import { cloneDeep } from "lodash-es";
import { Actor } from "../wiget-list/share/Widget";
import { wigetKitMap } from "../wiget-list/form-widget";
import clearFormItemProps from "../wiget-list/share/clearFormItemProps";
import WrapDecorator from "./wrap-decorator";

type ActorItemProps = {
  actor: Actor;
  index: number;
  id: string;
  title: string;
  isActive: boolean;
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
      className={` bg-slate-200`}
    >
      <div className=" relative">
        <WrapDecorator title={props.title} isActive={props.isActive}>
          <Form.Item {...formItemProps}>
            <Item {...nativeProps}></Item>
          </Form.Item>
        </WrapDecorator>
      </div>
    </DragItem>
  );
}

export default ActorItem;
