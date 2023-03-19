import { ContainerWidgetKit, FormWidgetKit } from "../pages/components/wiget-list/share/type";
import { Actor } from "../pages/components/wiget-list/share/Widget";

/*
    因为组件存在嵌套，所以递归的creator是必然的

    container类型的组件返回的代码是两段的，拼接孩子的代码
    form类型的组件返回的代码是一段的
*/
export function generateAntDesignForm(actorTree: Actor, widgetKitMap:  { [index: string]: FormWidgetKit | ContainerWidgetKit} ){
    function generate(node: Actor | null){
        if(node == null) return "";
        const {type} = node
        const widgetKit = widgetKitMap[type]  
        const code = widgetKit.generate(node.props);
        if(typeof code == "string"){
            return code
        }
     
        const {beforeCode, afterCode} = code
        const childCodeResult:string[] = (node.props.children || []).map((childNode)=>generate(childNode))
        return beforeCode + childCodeResult.join("") + afterCode
    }

    const code = generate(actorTree)
    return code
}