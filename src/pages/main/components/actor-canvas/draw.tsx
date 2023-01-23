import { Draggable } from "react-beautiful-dnd";
type DragItemProps = {
  id: string;
  index: number;
  className: string;
  onClick: () => void;
};
function DragItem(props: React.PropsWithChildren<DragItemProps>) {
  const { children: item, id, index, className } = props;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          onClick={() => {
            props.onClick();
          }}
          className={`${className} `}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item}
        </div>
      )}
    </Draggable>
  );
}

export default DragItem;
