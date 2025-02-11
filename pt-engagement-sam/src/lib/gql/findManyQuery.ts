import { Context, util, DynamoDBQueryRequest } from "@aws-appsync/utils";
export function request(ctx: Context) {    
    
    // filter is of type QueryFilterInput and sort is of type QuerySortInput
    const { filter, sort } = ctx.arguments; 
    
    const {filterExpression, expressionAttributeValues} = filter;

    // expressionAttributeValues is an array. Example is [{key: ":author", value: "John Doe"}]
    const expressionValues = expressionAttributeValues.reduce((acc, cur) => {
        acc[cur.key] = cur.value;
        return acc;
    }, {});

    const expressionNames = expressionAttributeValues.reduce((acc, cur) => {
        acc[cur.key] = cur.key.substring(1); // remove 
        return acc;
    }, {});

    const queryPayload: DynamoDBQueryRequest = {
        operation: 'Query',
        query: {
            expression: filterExpression,
            expressionNames,
            expressionValues,
        },
        select: 'ALL_ATTRIBUTES',        
    }


    return queryPayload;
}

export function response(ctx) {
    return ctx.result;
}