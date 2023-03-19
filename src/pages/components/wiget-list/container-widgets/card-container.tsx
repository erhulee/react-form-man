import {Card} from "antd";
import { ContainerWidgetKit, createInstanceParams } from "../share/type";
import { BaseActor } from "../share/Widget";
export type CardContainerActor = BaseActor;

type Props = {

}
export const CardContainerWidgetKit: ContainerWidgetKit = {
    columns: [
        {
            title: "title",
            dataIndex: "title",
            valueType: "input",
            formItemProps:{
                tooltip: "标题"
            }
          },
    ],
    generate(_props:any){
        return `<div></div>`
    },

    createInstance:(props: React.PropsWithChildren<createInstanceParams>)=>{
        const {children, id, props:_props} = props
        return(
            <Card {..._props}  >
                {children}
            </Card>)
          
    }
}