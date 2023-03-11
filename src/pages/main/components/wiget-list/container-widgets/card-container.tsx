import {Card} from "antd";
import { ContainerWidgetKit, createInstanceParams } from "../share/type";
import { BaseActor } from "../share/Widget";
export type CardContainerActor = BaseActor;

type Props = {

}
export const CardContainerWidgetKit: ContainerWidgetKit = {
    columns: [],
    generate(_props:any){
        return `<div></div>`
    },

    createInstance:(props: React.PropsWithChildren<createInstanceParams>)=>{
        const {children, id, props:{children: $children, parent: $parent}} = props
        return <div className=" bg-blue-200  border-dashed border-3 border-blue-400 px-2 " style={{minHeight: "80px"}} >
                 <Card >
                {children}
                </Card>
            </div>
    }
}