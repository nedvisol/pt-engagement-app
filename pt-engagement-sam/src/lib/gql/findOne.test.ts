import {describe, expect, it, test} from '@jest/globals';
import { request, response } from './findOne';
import { Context } from "@aws-appsync/utils";
import { util } from "@aws-appsync/utils";

describe('findOne', () => {
    beforeAll(() => {
        (util as any).dynamodb = {
            toMapValues: jest.fn()
        };
        jest.spyOn(util.dynamodb, 'toMapValues').mockImplementation((input:any) => {
            return { id: { S: input.id } };
        });
    });

    describe('request', () => {
        it('should create a DynamoDB GetItem request with the given id', () => {
            const id = '123';
            const result = request(id);

            expect(result).toEqual({
                operation: 'GetItem',
                key: {
                    id: { S: '123' }
                },
                consistentRead: true
            });
        });
    });

    describe('response', () => {
        it('should return the result from the context', () => {
            const ctx: Context = {
                result: { id: '123', name: 'Test' },
                // other properties of Context can be mocked as needed
            } as any;

            const result = response(ctx);

            expect(result).toEqual({ id: '123', name: 'Test' });
        });
    });
});