import axios from 'axios'
import { KEY,BASE_URL, HEADER_KEY } from '../Constants'

const trendingMoviesEndPoint =`${BASE_URL}/trending/movie/day?language=en-US`
const upComingMoviesEndPoint =`${BASE_URL}/movie/upcoming?api_key=${KEY}`
const topRatedMoviesEndPoint =`${BASE_URL}/movie/top_rated?api_key=${KEY}`

const apiCall=async (endPoint:string, params?:object)=>
    {
        console.log("EndPoint :",endPoint)
        const options = {
            method:"GET",
            headers:{
                accept:"application/json",
                Authorization:"Bearer "+HEADER_KEY
            },
            url:endPoint
        }

        try{
            const response = await axios.request(options)
            return response
        }catch(error){
            console.log("Error ", error)
            return {}
        }
    }


    export const fetchTrendingMovies=()=>apiCall(trendingMoviesEndPoint)
    export const fetchUpComingMovies=()=>apiCall(upComingMoviesEndPoint)
    export const fetchTopRatedMovies=()=>apiCall(topRatedMoviesEndPoint)

