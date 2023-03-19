import { cloneDeep } from "lodash-es"

type AbstractFunction = (props: any) => {
    deletedProps: any
    remainProps: any 
    formItemProps?: any
}

function omitUndefined<T extends Record<string, any>>(obj:T):Partial<T> {
    return Object.entries(obj)
      .filter(([key, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  }
function deleteKeys(target:Record<string, any>, keys:string[]):Record<string, any>{
    const result:any = {};
    keys.forEach(key=>{
        if(target.hasOwnProperty(key)){
            result[key] = target[key];
            delete target[key]
        }
    })

    return result
}

export const getFormItemProps: AbstractFunction = (props)=>{
    const cloneProps = omitUndefined(cloneDeep(props));
    const keys = ['children', 'parent'];
    const deletedProps = deleteKeys(cloneProps, keys);

    const formItemKeys = ['label'];
    const formItemProps = deleteKeys(cloneProps, formItemKeys);

    return {
        deletedProps: deletedProps,
        remainProps: cloneProps,
        formItemProps: formItemProps
    }
}
export const getFormProps: AbstractFunction = (props)=>{
    const cloneProps = omitUndefined(cloneDeep(props));
    const keys = ['children', 'parent'];
    const deletedProps = deleteKeys(cloneProps, keys);

    return {
        deletedProps: deletedProps,
        remainProps: cloneProps,
    }
}

// like json.stringfy
export function splitProps(props:any): string{
    if(props == null) return "";
    if(typeof props !== "object") return "";
    if(Array.isArray(props)) return "";
    //  <App stringp = "x" numberp = {2} obj = {{a: 2}}  >
    const keys = Object.keys(props);
    const result:string[] = [];
    keys.forEach(key => {
        const value = props[key];
        if(typeof value == "number"){
            result.push(`${key} = {${value}}`)
        }else if(typeof value == "string"){
            result.push(`${key} = "${value}"`)
        }else if(typeof value == "object"){
            result.push(`${key} = {${JSON.stringify(value)}}`)
        }else if(typeof value == "boolean"){
            result.push(`${key} = {${value.toString()}}`)
        }else{

        }
    })
    return result.join(" ")
}

export default splitProps