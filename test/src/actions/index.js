import * as types from './actionTypes';

export const _create = () =>{
    return {
        type : types._CREATE,
        data
    }
}

export const _delete = (index) =>{
    return {
        type:types._DELETE,
        index
    }
}