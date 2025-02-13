import * as fs from 'fs';
import * as yaml from 'js-yaml';

export function mergeYamlFiles({ file1, file2, output }: { file1: string; file2: string; output: string; }): any {
    try {
        let file1Content = fs.readFileSync(file1, 'utf8');
        let file2Content = fs.readFileSync(file2, 'utf8');

        file1Content = file1Content.replace(/!/g, '\\!');
        file2Content = file2Content.replace(/!/g, '\\!');

        const yaml1 = yaml.load(file1Content, { schema: yaml.DEFAULT_SCHEMA }) as any;
        const yaml2 = yaml.load(file2Content, { schema: yaml.DEFAULT_SCHEMA }) as any;

        const merge = (obj1: any, obj2: any): any => {
            for (const key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                if (!obj1[key]) {
                    obj1[key] = {};
                }
                merge(obj1[key], obj2[key]);
                } else {
                obj1[key] = obj2[key];
                }
            }
            }
            return obj1;
        };

        const mergedYaml = merge(yaml1, yaml2);

        let yamlStr = yaml.dump(mergedYaml);
        yamlStr = yamlStr.replace(/\\!/g, '!');

        fs.writeFileSync(output, yamlStr, 'utf8');
    } catch (error) {
        console.error('Error reading or merging YAML files:', error);
        throw error;
    }
}

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.error('Usage: node template-merge.js <file1> <file2> <output>');
    process.exit(1);
}

const [file1, file2, output] = args;

mergeYamlFiles({ file1, file2, output });