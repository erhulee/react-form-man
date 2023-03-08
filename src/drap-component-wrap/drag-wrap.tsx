import { cloneDeep } from "lodash-es";
import { DragPreviewImage, useDrag } from "react-dnd";
import { ItemType } from "./type";

function DragWrap(props: React.PropsWithChildren<{
    previewSrc?: string
    itemType: ItemType
    item?: ()=>any;
}>){
   
    const {previewSrc = "", children, itemType, item= ()=>({})} = props;
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: itemType,
            collect: (monitor) => {
                return {
                    isDragging: Boolean(monitor.isDragging()),
                }
            },
            item: ()=>{
                const transferData = cloneDeep(item());
                transferData.itemType = itemType;
                return transferData;
            }
        }),
        []
    );


    return <>
        <DragPreviewImage src={previewSrc} connect={preview}></DragPreviewImage>
        <div ref={drag}>
            {children}
        </div>
    </>;
}

export default DragWrap;