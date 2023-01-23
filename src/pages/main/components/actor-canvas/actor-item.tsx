import { schema2ActorCreator } from "../../constant";
import { Draggable } from "react-beautiful-dnd";
import { Actor } from "../../../../store/schema";
import React from "react";
import DragItem from "./draw";
import { Button } from "antd";

type ActorItemProps = {
  actor: Actor;
  index: number;
  id: string;

  draging: boolean;
};

function ActorItem(props: ActorItemProps) {
  const { actor, index, id, draging } = props;
  const Item = schema2ActorCreator[props.actor.type];
  return (
    <DragItem
      index={index}
      id={id}
      className={`bg-slate-200 mt-2 ${draging ? "bg-red-500" : "bg-slate-200"}`}
    >
      {/* <Item
        {...actor.props}
        onClcik={() => {
          console.log("form CLick");
        }}
      ></Item> */}
      <Button>{actor.type}</Button>
    </DragItem>
  );
}

export default ActorItem;
