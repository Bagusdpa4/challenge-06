import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

export const reduxUser = async () =>{
    return await http3.get(API_ENDPOINT.Get_User);;
  }
