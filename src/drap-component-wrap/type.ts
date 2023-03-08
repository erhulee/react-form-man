export enum ItemType  {
    origin = "origin",
    actor = "actor"
}

export type DragTransferData<T = any> =Record<string, any> & T & {
    itemType: ItemType
}
