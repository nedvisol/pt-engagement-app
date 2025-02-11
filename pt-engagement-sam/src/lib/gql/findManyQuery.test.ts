import {describe, expect, it, test} from '@jest/globals';
import { request, response } from './findManyQuery';
import { Context } from "@aws-appsync/utils";

describe('findManyQuery', () => {
    describe('request', () => {
        it('should generate a valid DynamoDB query payload', () => {
            const ctx: Partial<Context> = {
                arguments: {
                    filter: {
                        filterExpression: 'author = :author',
                        expressionAttributeValues: [{ key: ':author', value: 'John Doe' }]
                    },
                    sort: null
                }
            };

            const expectedPayload = {
                operation: 'Query',
                query: {
                    expression: 'author = :author',
                    expressionNames: { ':author': 'author' },
                    expressionValues: { ':author': 'John Doe' }
                },
                select: 'ALL_ATTRIBUTES'
            };

            const result = request(ctx as Context);
            expect(result).toEqual(expectedPayload);
        });

        it('should handle empty filter and sort arguments', () => {
            const ctx: Partial<Context> = {
                arguments: {
                    filter: {
                        filterExpression: '',
                        expressionAttributeValues: []
                    },
                    sort: null
                }
            };

            const expectedPayload = {
                operation: 'Query',
                query: {
                    expression: '',
                    expressionNames: {},
                    expressionValues: {}
                },
                select: 'ALL_ATTRIBUTES'
            };

            const result = request(ctx as Context);
            expect(result).toEqual(expectedPayload);
        });
    });

    describe('response', () => {
        it('should return the result from context', () => {
            const ctx: Partial<Context> = {
                result: { items: [{ id: 1, name: 'Test' }] }
            };

            const result = response(ctx);
            expect(result).toEqual({ items: [{ id: 1, name: 'Test' }] });
        });
    });
});