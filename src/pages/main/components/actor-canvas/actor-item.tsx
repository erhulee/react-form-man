import DragItem from "./draw";
import { Form } from "antd";
import { ActorActions } from "../../../../store/actorStore";
import { cloneDeep } from "lodash-es";
import { Actor } from "../wiget-list/share/Widget";
import clearFormItemProps from "../wiget-list/share/clearFormItemProps";
import WrapDecorator from "./wrap-decorator";
import { widgetKitMap } from "../../constant";
import DragWrap from "../../../../drap-component-wrap/drag-wrap";
import { ItemType } from "../../../../drap-component-wrap/type";

type ActorItemProps = {
  actor: Actor;
  index: number;
  id: string;
  title: string;
  isActive: boolean;
};

function ActorItem(props: ActorItemProps) {
  const { actor, index, id } = props;
  const widgetKit = widgetKitMap[props.actor.type];
  const nativeProps = cloneDeep(actor.props);
  const formItemProps = clearFormItemProps(nativeProps);
  const Item = widgetKit.createInstance;

  return (
    <DragWrap itemType={ItemType.actor} item={()=> ({componentId:id})}>
      <div className=" relative bg-slate-200 "  >
        <WrapDecorator title={props.title} isActive={props.isActive}>
          <Form.Item {...formItemProps}>
            <Item {...nativeProps} id={id} ></Item>
          </Form.Item>
        </WrapDecorator>
      </div>
      </DragWrap>
  );
}

export default ActorItem;
