function splitProps(props:any): string{
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