import axios from "axios";
import { userLogin,userLoginSuccess,userLoginFailed} from "../action/authAction";

const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

export const postMiddleware = () => {
    return dispatch => {
        axios.get(SERVER_URL).then(res =>{
            console.log(res);
            dispatch(userLogin(res.data));
            console.log(res.data);
            dispatch(userLoginSuccess(res.data));
            console.log(res.data);
        }).catch((error)=>{
            dispatch(userLoginFailed());
            console.log('Data Error');
        })
    }
}