export interface ContainerWidgetKit {
    columns: any[];
    generate: (props: any) => string;
    createInstance: (props: any) => JSX.Element
}
export interface FormWidgetKit {
    columns: any[];
    generate: (props: any) => string;
    createInstance: (props: any) => JSX.Element
}