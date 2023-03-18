// 支持用户给定一个枚举类型，生成 options

import {parse, ParseResult} from "@babel/parser"
// import traverse from "@babel/traverse";

export function enum2options(enumCode: string):Array<{label:string, value:string|number}>{
    const ast = parse(enumCode, {
        plugins: ['typescript']
    });
    const options:Array<{label:string, value:string|number}> = [];

    function traverse(node: ParseResult<File>){
        const type = node.type;

        switch(type){
            case "File":
                traverse((node as any).program);
                break;
            case "Program":
                (node as any).body.forEach((node:any) =>{
                    traverse(node);
                })
                break;
            case "TSEnumDeclaration":
                (node as any).members.forEach((node:any, index:number)=>{
                    const option = {
                        label: node.id.name,
                        value: node?.initializer?.value || index
                    }
                    options.push(option)
                })
        }
    }
    traverse(ast as any);
    return options;
}
