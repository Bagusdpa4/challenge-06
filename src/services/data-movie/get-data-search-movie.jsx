import { API_ENDPOINT } from "../../utils/api-endpoint";
import http3 from "../../utils/http3";

export const reduxMovieSearch = async (query) =>{
  return await http3.get(`${API_ENDPOINT.Search}?page=1&query=${query ? query : ""}`);
}
