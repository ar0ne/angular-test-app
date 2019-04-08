import { CHANGE, INCREASE, DECREASE, RESET } from './actions';

export interface IAppState {
    first: number;
    second: number;
}

export const INITIAL_STATE: IAppState = {
    first: -5,
    second: 10,
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case CHANGE:
            return Object.assign({}, state);
        
        case INCREASE:
            return Object.assign({}, state, {
                first: state.first + 1
            });
            
        case DECREASE:
            return Object.assign({}, state, {
                second: state.second - 1
            });
        case RESET:
            return Object.assign({}, INITIAL_STATE);
        }

    return state;
}