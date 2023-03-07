// 可以容纳万物
import { ContainerWidgetKit } from "../share/type";
import { BaseActor } from "../share/Widget";

export type CellActor = BaseActor;

export const CellContainerWidgetKit: ContainerWidgetKit = {
    columns:[],
    generate(_props:any){
        return `<div></div>`
    },
    createInstance: (props:any)=>{
        return <div>~~</div>
    }
} 