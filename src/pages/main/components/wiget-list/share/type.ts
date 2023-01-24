export interface FormWigetKit {
    columns: any[];
    generate: (props: any) => string;
    createInstance: (props: any) => JSX.Element
}