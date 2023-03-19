import React from "react";
import { Actor } from "./Widget";

export interface ContainerWidgetKit {
    columns: any[];
    generate: (props: any) => string | {beforeCode:string , afterCode: string};
    createInstance: (props: any) => JSX.Element
}
export interface FormWidgetKit {
    columns: any[];
    generate: (props: any) => string;
    createInstance: (props: React.PropsWithChildren<{props: any, id: string}>) => JSX.Element
}

export type createInstanceParams = {
    id: string;
    // 可恶！！，当时结点属性就该叫 $children, $parent
    // 现在和 react 的 children 冲突了 呜呜呜
    props:{
        parent: Actor;
        children: Actor[];
    }

}