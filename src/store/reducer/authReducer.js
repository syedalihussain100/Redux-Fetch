import { USER_LOGIN,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED } from "../action/actionType"

const iniState = {
    user:null,
    loading:false,
    errorMessage:""
    
}

const authReducer = (state = iniState,action) => {
    switch (action.type) {
        case USER_LOGIN:{
            return{
              ...state,
              user:action.data.user  
            }
        }
         
        case USER_LOGIN_SUCCESS:{
            return{
              ...state,
              loading:true  
            }
        }  
         
        case USER_LOGIN_FAILED:{
            return{
              ...state,
             errorMessage:"Error Not Recieve"  
            }
        } 
    
        default:
         return state
    }
}


export default authReducer;