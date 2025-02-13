import { CodegenConfig } from '@graphql-codegen/cli'
 
function config(rootDir: string):CodegenConfig {
    const config: CodegenConfig = {
        schema: rootDir + '/schema.graphql',  
        generates: {
        }
    }
    config.generates[`${rootDir}/__generated__/`] = {
        preset: 'client'
    }

    return config;
}
 
export default config