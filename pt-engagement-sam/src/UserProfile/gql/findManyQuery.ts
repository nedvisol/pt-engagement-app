import { Context, util, DynamoDBQueryRequest } from "@aws-appsync/utils";
import * as findManyQuery from '../../lib/gql/findManyQuery';
export function request(ctx: Context) {    
    
    const queryPayload: DynamoDBQueryRequest = findManyQuery.request(ctx);

    return queryPayload;
}

export function response(ctx: Context) {
    return findManyQuery.response(ctx);
}