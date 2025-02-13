import {describe, expect, it} from '@jest/globals';
import { request, response, FindManyRequestOptions } from './findManyQuery';

describe('findManyQuery', () => {
    describe('request', () => {
        it('should generate a valid DynamoDB query payload', () => {
            const options: FindManyRequestOptions = {
                filter: {
                    filterExpression: 'author = :author',
                    expressionAttributeValues: [{ key: ':author', value: 'John Doe' }]
                },
                sort: {
                    sortExpression: '',
                    expressionAttributeValues: []
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

            const result = request(options);
            expect(result).toEqual(expectedPayload);
        });

        it('should handle empty filter and sort arguments', () => {
            const options: FindManyRequestOptions = {
                filter: {
                    filterExpression: '',
                    expressionAttributeValues: []
                },
                sort: {
                    sortExpression: '',
                    expressionAttributeValues: []
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

            const result = request(options);
            expect(result).toEqual(expectedPayload);
        });
    });

    describe('response', () => {
        it('should return the result from context', () => {
            const ctx = {
                result: { items: [{ id: 1, name: 'Test' }] }
            };

            const result = response(ctx);
            expect(result).toEqual({ items: [{ id: 1, name: 'Test' }] });
        });
    });
});