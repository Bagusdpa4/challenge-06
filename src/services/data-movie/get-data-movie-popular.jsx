import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

export const reduxMovie = async () =>{
  return await http3.get(API_ENDPOINT.POPULAR);;
}
