export interface BaseOptions  {
    id?:     string
    name?:   string
    label?:  string
    placeholder?: string
    required?: boolean
    requiredMessage?: string
    rules?: string[]
}
export class BaseSetting{
    id:     string
    label:  string
    name:   string
    placeholder: string
    required: boolean
    requiredMessage: string
    rules: string[]

    constructor(options:Required<BaseOptions>){
        const {id, name, placeholder, required,requiredMessage,rules, label} = options
        this.id = id;
        this.name = name;
        this.required = required;
        this.placeholder = placeholder;
        this.requiredMessage = requiredMessage;
        this.rules = rules
        this.label = label
    }
}