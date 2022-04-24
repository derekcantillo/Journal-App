import { types } from '../types/types';

const initialStare={
    uid: 123,
    name: 'Derek',
    dir: {
        b:122
    }
}

export const authReducer = (state = {}, action)=>{

    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        
        case types.logout:
            return { }

        default:
            return state
    }

}