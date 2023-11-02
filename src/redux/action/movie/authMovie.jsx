import { reduxMovieDetail } from "../../../services/data-movie/get-data-movie-detail";
import { reduxMovie } from "../../../services/data-movie/get-data-movie-popular";
import { setDetail, setMovie } from "../../reducer/movie/authMovie";

export const getMovie = () => (dispatch) => {
    reduxMovie().then((result) => {
        dispatch(setMovie(result.data.data))
        return result
    }).catch((err) => {
        
    });
}

// export const getMovieDetail = () => (dispatch) => {
//     reduxMovieDetail().then((result) => {
//         dispatch(setDetail(result.data.data))
//         return result
//     }).catch((err) => {
        
//     });
// }

// export const getMovieDetail = (movieId) => async (dispatch) => {
//     try {
//         const response = await reduxMovieDetail(movieId)
//         dispatch(setDetail(response.data))
//     } catch (error) {
        
//     }
//     }

// export const getDetailMovie = (movieId) => async (dispatch, getState) => {
//   try {
//     const { token } = getState().auth;
//     if (!token) return;

//     const response = await axios.get(
//       `${import.meta.env.VITE_API_URL}/api/v1/movie/${movieId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const { data } = response.data;
//     dispatch(setDetailMovie(data));
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       if (error.response.status === 401) {
//         localStorage.removeItem("token");
//         return;
//       }
//       alert(error?.response?.data?.message);
//       return;
//     }
//     alert(error?.message);
//   }
// };

// export const getSearchMovie =
//   (query, page, setErrors, errors) => async (dispatch, getState) => {
//     try {
//       const { token } = getState().auth;
//       if (!token) {
//         return;
//       }

//       const response = await axios.get(
//         `${
//           import.meta.env.VITE_API_URL
//         }/api/v1/search/movie?page=${page}&query=${query}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const { data } = response.data;
//       dispatch(setSearch(data));
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         setErrors({
//           ...errors,
//           isError: true,
//           message: error?.response?.data?.message || error?.message,
//         });
//         return;
//       }

//       alert(error?.message);
//       setErrors({
//         ...errors,
//         isError: true,
//         message: error?.message,
//       });
//     }
//   };

// export const getTrailerMovies =
//   (setErrors, errors, movieId) => async (dispatch, getState) => {
//     try {
//       const { token } = getState().auth;
//       if (!token) return;

//       const response = await axios.get(
//         `${import.meta.env.VITE_API_URL}/api/v1/movie/${movieId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const { data } = response.data;

//       dispatch(setTrailer(data?.videos[0]));
//       setErrors({ ...errors, isError: false });
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         setErrors({
//           ...errors,
//           isError: true,
//           message: error?.response?.data?.message || error?.message,
//         });
//         return;
//       }

//       alert(error?.message);
//       setErrors({
//         ...errors,
//         isError: true,
//         message: error?.message,
//       });
//     }
//   };