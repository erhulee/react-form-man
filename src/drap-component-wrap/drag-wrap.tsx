import { cloneDeep,  } from "lodash-es";
import { DragPreviewImage, useDrag } from "react-dnd";
import  { ActorActions, find } from "../store/actorStore";
import { ItemType } from "./type";

function DragWrap(props: React.PropsWithChildren<{
    previewSrc?: string
    itemType: ItemType
    item?: any
}>){
 
    const {previewSrc = "", children, itemType, item = {}} = props;
    console.log("transferData:", item, find(item.componentId))
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: itemType,
            collect: (monitor) => {
                return {
                    isDragging: Boolean(monitor.isDragging()),
                }
            },
            item: item,
        }),
        []
    );

    // if(isDragging){
    //     const id = item().componentId;
    //     ActorActions.activeActor(id);
    // }


    return <>
        {/* <DragPreviewImage src={previewSrc} connect={preview}></DragPreviewImage> */}
        <div ref={drag}>
            {children}
        </div>
    </>;
}

export default DragWrap;