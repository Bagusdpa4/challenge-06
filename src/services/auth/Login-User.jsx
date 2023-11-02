import http2 from "../../utils/http";   
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const reduxLoginUser = async (input) =>{
    return await http2.post(API_ENDPOINT.Login_User, input);
}
