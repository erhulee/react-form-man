// 从 store 里拿到组件树，开始渲染
import { cloneDeep } from "lodash-es";
import { useSnapshot } from "valtio";
import { ItemType } from "../drap-component-wrap/type";
import useSubscribe from "../hooks/useSubscribe";
import { useUpdate } from "../hooks/useUpdate";
import { Actor, WidgetType } from "../pages/main/components/wiget-list/share/Widget";
import { widgetKitMap } from "../pages/main/constant";
import actorStore from "../store/actorStore";
import globalFormSetting from "../store/globalFormSetting";
import RenderItemWrap from "./render-item-wrap";


// 留一个入口支持用户上传组件
function queryWidgetKit(type: WidgetType){
    const widgetKit = widgetKitMap[type];
    return widgetKit;
}

function Render(node: Actor, activeActorId: string){

    const children = node?.props?.children || [];
    const type = node.type;
    const childrenRenderResult = children.map(child=>Render(child, activeActorId));
    const widgetKit = queryWidgetKit(type);
    const nativeProps = cloneDeep(node.props);
    const InstanceComp = widgetKit.createInstance;


    const instance = (
        <RenderItemWrap actorData = {node} currentActiveId = {activeActorId}>
            <InstanceComp {...nativeProps}>
                {childrenRenderResult}
            </InstanceComp>
        </RenderItemWrap>)
    return instance;
    // const isForm = isFormWidget(type);
}
function RenderRoot(){
    console.log("render")
    const snap: any = actorStore;
    const active:Actor = snap.activeActor;
    const actorsTreeNode = snap.actorsTree;
    const globalSetting = useSnapshot(globalFormSetting);
    const rootNode = Render(actorsTreeNode, active?.id || "");
    return <div>
        {rootNode}
    </div>
}

export default RenderRoot;