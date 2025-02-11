import { Context, util, DynamoDBGetItemRequest } from "@aws-appsync/utils";
export function request(ctx: Context) {    
    const { id } = ctx.arguments;
 
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