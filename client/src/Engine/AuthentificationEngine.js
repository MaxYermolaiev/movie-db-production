import {useEffect,useState,useCallback} from 'react'
import {Engine} from "./index";

 const AuthentificationEngine =()=>{
    const [token, setToken] = useState(null)
    const [id, setId] = useState(null)
    const storeName="user";
    const {request} = new Engine();
    //here tune data from favorite and makes all obligatory manipulations with DB
     const engineRemoveFavorite=useCallback((token,movieData)=>{ return request("https://yermolaiev-movie-db.herokuapp.com/api/remove-favorite","POST",{movie: movieData},{credentials:`bearer ${token}`})},[request])
     const engineAddFavorite=useCallback((token,movieData)=>{return request("https://yermolaiev-movie-db.herokuapp.com/api/add-favorite","POST", {movie: movieData},{credentials:`bearer ${token}`})},[request])
     const engineGetFavorite=useCallback((token)=>{ return request("https://yermolaiev-movie-db.herokuapp.com/api/get-favorite","GET",null,{credentials:`bearer ${token}` })},[request])

     const login=useCallback((token,id)=>{
         setToken(token);setId(id);
         localStorage.setItem(storeName,JSON.stringify({token,id}))
      },[])

      const logout=useCallback(()=>{
        setToken(null);setId(null);
        localStorage.clear()
      },[])
/*
When we reload page data from state will erase
 then why we dowland from local storage
for this, to iluminate when after reload user can be logouted
*/
     useEffect(()=>{
         let localStorageData = JSON.parse(localStorage.getItem(storeName));
          if(localStorageData?.token&&localStorageData?.id){
              login(localStorageData.token,localStorageData.id)
          }
     },[login])

return {login,logout,id,token,engineRemoveFavorite,engineAddFavorite,engineGetFavorite}
}
export default AuthentificationEngine
