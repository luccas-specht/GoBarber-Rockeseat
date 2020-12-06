import handlebars from 'handlebars';

import { IMailTemplateProvider } from '../models/IMailTemplateProvider'
import { IParseMailTemplate } from '../models/IParseMailTemplate';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
    public async parse({ template, variables }: IParseMailTemplate): Promise<string> {
        const parseTemplate = handlebars.compile(template);

        return parseTemplate(variables);
    }
};

export { HandlebarsMailTemplateProvider };