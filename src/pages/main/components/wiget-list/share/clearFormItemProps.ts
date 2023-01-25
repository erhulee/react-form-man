// 将部分应该传给 FormItem 抽取出来
const targets = ['name', 'label', "required"]
function clearFormItemProps(props:any){
    const result:any = {};
    targets.forEach(target=>{
        result[target] = props[target];
        delete props[target];
    })

    delete props.id
    return result
}

export default clearFormItemProps;