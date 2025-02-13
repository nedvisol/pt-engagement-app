import { Context, util, DynamoDBGetItemRequest } from "@aws-appsync/utils";

export interface FindOneRequestOptions {    
}

export function request(id: string, options? : FindOneRequestOptions) {        
    const paylooad: DynamoDBGetItemRequest = {
        operation: 'GetItem',
        key: util.dynamodb.toMapValues({ id }),
        consistentRead: true
    };
    return paylooad;
}

export function response(ctx: Context) {
    return ctx.result;
}