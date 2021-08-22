import axios from "../helpers/axios";
import { authConstants, userContants } from "./constants"

export const signup = (user) => {

    console.log(user);

    return async (dispatch)=>{

        //database need part 11
        dispatch({type : userContants.USER_REGISTER_REQUEST});
         const res = await axios.post('/signup',{
                ...user
         });

         //part 11
         if(res.status === 201){
             const { message } = res.data;
            
             dispatch({
                 type: userContants.USER_REGISTER_SUCCESS,
                 payload: { message  }
             });
         }else{
             if(res.status === 400){
                 dispatch({
                     type: userContants.USER_REGISTER_FAILURE,
                     payload: { error: res.data.error}
                 });
             }
         }
      
    }
}