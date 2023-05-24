import { CounterScheme } from "../types/counterSchema";
import { counterActions, counterReducer } from "./CounterSlice";

describe('CounterSlice', () => {

    test('increment', () => {
        const state: CounterScheme = {value:10};
        expect(counterReducer(state, counterActions.increment)).toEqual({value:11});
    });

    test('decrement', () => {
        const state: CounterScheme = {value:10};
        expect(counterReducer(state, counterActions.decrement)).toEqual({value:9});
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({value:1});
    });
});