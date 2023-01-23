
export interface Actor {
    id?: string // 保证唯一
    type: "input" | "textarea" | "number",
    props: any
}


