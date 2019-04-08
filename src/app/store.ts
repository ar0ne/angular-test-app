import { CHANGE, INCREASE, DECREASE } from './actions';

export interface IAppState {
    lastUpdate: Date;
    first: number;
    second: number;
}

export const INITIAL_STATE: IAppState = {
    first: -5,
    second: 10,
    lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case CHANGE:
            return Object.assign({}, state, {
                lastUpdate: new Date()
            });
        
        case INCREASE:
            return Object.assign({}, state, {
                first: state.first + 1,
                lastUpdate: new Date()
            })
            
        case DECREASE:
            return Object.assign({}, state, {
                second: state.second - 1,
                lastUpdate: new Date()
            })
        }

    return state;
}