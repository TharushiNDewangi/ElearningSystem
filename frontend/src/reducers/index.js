
import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import authReducer from './auth.reducers';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    
   
    
});

export default rootReducer;