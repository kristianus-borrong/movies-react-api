import axios from "axios";

export const getMoviesList = async () => {
    const res =  await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=9074119789702b537c13ead2294275c7`);
    return res.data;
}

export const getTVSeriesList = async () => {
    const res =  await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=9074119789702b537c13ead2294275c7`);
    return res.data;
}
