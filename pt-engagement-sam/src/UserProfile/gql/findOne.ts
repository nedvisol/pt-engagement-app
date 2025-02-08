import { util } from "@aws-appsync/utils";
export function request(ctx) {    
    const { id } = ctx.arguments;
    return {
        operation: 'GetItem',
        key: util.dynamodb.toMapValues({ id }),
        consistentRead: true
    };
}

export function response(ctx) {
    return ctx.result;
}