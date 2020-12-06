interface ITemplateVariables {
   [key: string]: string | number;
}

interface IParseMailTemplate {
    template: string;
    variables: ITemplateVariables
}

export { IParseMailTemplate };