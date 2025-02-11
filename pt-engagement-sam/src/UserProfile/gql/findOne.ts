import { Context, util, DynamoDBGetItemRequest } from "@aws-appsync/utils";
import * as findOne from '../../lib/gql/findOne';
export function request(ctx: Context) {    
    const paylooad: DynamoDBGetItemRequest = findOne.request(ctx);
    return paylooad;
}


export function response(ctx: Context) {
    return findOne.response(ctx);
}