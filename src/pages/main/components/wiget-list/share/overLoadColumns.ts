// 按照 title - dataIndex 作为 key，去重数组，以后面的为主
export function overLoadColumns(columns: Array<{title: string, dataIndex: string}>){
    const map = new Map();
    columns.forEach(column => {
        const key = column.title + column.dataIndex;
        map.set(key, column);
    })
    return Array.from(map.values());
}