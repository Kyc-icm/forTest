import Reducer_setting from './reducer_setting';
import * as tyeps from '../actions/actionTyeps'; 
import { combineReducers } from 'redux'; 
 
 
const root_reducer = {
    setting : Reducer_setting,
} 
 
 
function redux_settingData (state = root_reducer, action){ 
    const {setting} = state;
 
    switch (action.type){
        case tyeps._CREATE: 
           
            return { setting : 
                {...setting}.concat(action.data)
            } 
        
        case tyeps._UPDATE: 
            return { setting : setting.map( (key, i) => {
                    if(i === action.index){ 
                        return {...key, boolean:true}
                    }else{
                        return {...key};
                    }
                })
            }    
        default: return state; 
    }
} 
 
 
export default combineReducers({redux_settingData});

