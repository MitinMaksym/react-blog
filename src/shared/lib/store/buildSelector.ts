import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state:StateSchema) => T

type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>): Result<T>{
    return [() => useSelector(selector), selector];
}