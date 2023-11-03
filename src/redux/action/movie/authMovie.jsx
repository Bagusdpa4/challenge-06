import { reduxMovieDetail } from "../../../services/data-movie/get-data-movie-detail";
import { reduxMovie } from "../../../services/data-movie/get-data-movie-popular";
import { reduxMovieSearch } from "../../../services/data-movie/get-data-search-movie";
import { setDetail, setMovie, setSearch } from "../../reducer/movie/authMovie";

export const getMovie = () => (dispatch) => {
    reduxMovie().then((result) => {
        dispatch(setMovie(result.data.data))
        return result
    }).catch((err) => {
        
    });
}

export const getMovieDetail = (id) => async (dispatch) => {
    reduxMovieDetail(id).then((result) => {
        dispatch(setDetail(result.data.data))
        return result
    }).catch((err) => {
        
    });
}

export const getMovieSearch = (query) => async (dispatch) => {
    reduxMovieSearch(query).then((result) => {
        dispatch(setSearch(result.data.data))
        return result
    }).catch((err) => {

    });
}
