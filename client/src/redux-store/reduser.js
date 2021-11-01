let initialState = {movies: [], loading: true, errors: null}
const find=(id,movieStore)=>{
    let index=-1;
    for(let i=0;i<movieStore.length;i++){
        if(movieStore[i].id === id){
            index=i;
        }
    }
    return index;
}
const reduser = ( state=initialState,action)=>{
          switch (action.type) {
              case('FETCH_MOVIE_REQUEST'):return {...state, loading:true, errors:null}
              case('FETCH_MOVIE_LOADED'):return {movies: action.payload, loading:false, errors:null}
              case('FETCH_MOVIE_ERROR'):return {movies: state.movies, loading:false, errors:action.payload}
              case ('ADD_MOVIE'): {
                  let movies = state.movies
                  movies.push(action.payload)
                  const temp ={ errors:null, movies:movies,loading: false}
                  return temp;}
              case ('REMOVE_MOVIE'): {
                  let index = find(action.payload.id,state.movies)
                  let temp = {errors:null,loading: false, movies:[...state.movies.slice(0, index), ...state.movies.slice(index + 1)]}
                  return temp;
              }
              default:return state;
          }
}
export default reduser
