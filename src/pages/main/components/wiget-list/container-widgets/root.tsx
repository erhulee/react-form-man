import { ContainerWidgetKit } from "../share/type";
import { BaseActor } from "../share/Widget";


export type RootActor = BaseActor;
export const RootWidgetKit: ContainerWidgetKit ={
    columns:    [],
    generate:   ()=>{
        return ""
    },
    createInstance: (props: any)=>{
        return <div>
            {props.children}
        </div>
    }

}