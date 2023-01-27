// 按照 title - dataIndex 作为 key，去重数组，以后面的为主
export function overLoadColumns(columns: Array<{title: string, dataIndex: string}>){
    const map = new Map();
    columns.forEach(column => {
        // 装饰性 Columns 都保留
        if(column.dataIndex == null){
            const key = Math.random() * 999999999;
            map.set(key, column);
        }else{
        // 数据性 Clumns 需要覆盖
            const key = column.title + column.dataIndex;
            map.set(key, column);
        }

    })
    return Array.from(map.values());
}