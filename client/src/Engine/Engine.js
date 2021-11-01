export default class Engine {
    api_key="39a8f3cf691a2a2d1a329867c1095d19";//api key to hot acces
    path = "https://api.themoviedb.org/3/"//part of rbase route
    request = async (url, method = "GET", body = null, headers = {}) => {
        try {
            //if body ecxyst and server true send request to DB(logining, registration, tune favorite movie which save in mongo db
            if (body !== null||headers.credentials){
                {
                if(body){
                    body = this.transformToJSON(body)
                    headers['Content-type'] = 'application/json';}
                 }
                let response = await fetch(url, {method, body, headers});
                //tuned and request sent with data
                //handling results
                if (!response.ok) {
                    console.log("Trouble in server side")
                    let err = await response.json()
                    throw err.errors
                }else{
                    return await response.json()
                }
            } else {
                //else mace request to movie db
                let response = await fetch(`${this.path}${url}`);
                //tuned and request sent with data
                //handling results
                if (!response.ok) {
                    console.log("can't fetch response")
                    let err = await response.json()
                    throw new Error(err.errors)
                }
                return await response.json()
            }
        } catch (e) {throw e}
    }

    transformToJSON(value) {return JSON.stringify(value)};
    getImg=(id)=>{return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${id}`}
    getPopularMovies = async (page) => {
        //Serch data by requirered url and transform data - get only requiered info
        let temp = await this.request(`movie/popular?api_key=${this.api_key}&language=en-US&page=${page}`);
        return temp;
    };
    getBySearch = async (page,search) => {
        //Serch data by requirered url and query params and transform data - get only requiered info
        if(search&&page){return await this.request(`search/movie?api_key=${this.api_key}&language=en-US&query=${search}&page=${page}`);}
        return await this.request(`search/movie?api_key=${this.api_key}&language=en-US&query=${search}`);
    }
    getByGenre = async (page,search) => {
        //Serch data by requirered url and transform data - get only requiered info
        if(search&&page){
            return await this.request(`discover/movie?api_key=${this.api_key}&language=en-US&&include_adult=false&&page=${page}&with_genres=${search}`)
        }
       return await this.request(`genre/movie/list?api_key=${this.api_key}&language=en-US`);
    }
    getMovieDetails = async (id) => {
        //Serch data by requirered url and transform data - get only requiered info
        return await this.request(`movie/${id}?api_key=${this.api_key}&language=en-US`);
    }
    getRecommendations = async (id) => {
        //Serch data by requirered url and transform data - get only requiered info
        return await this.request(`movie/${id}/recommendations?api_key=${this.api_key}&language=en-US&language=en-US&page=1`);
    }

}
