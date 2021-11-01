import React from "react";
import {Link} from "react-router-dom";
import Wrapper from "../../Engine/Wrapper";
import {useHistory} from "react-router-dom"
import "./SideBar.css"
import {connect} from "react-redux";
import {FETCH_MOVIE} from "../../redux-store/action";

const SideBar = (props) => {
    //if token exist fetch favorite from request
    if(props.token){props.getFavoriteMovie()}
    const history = useHistory()
    const generateId=()=>{
        props.engine.getPopularMovies(random(1,500))
            .then(data=> {
                let temp = `/random_movie/${data.results[random(0, 19)].id}`
               history.push(temp)
            })
            .catch(err=>err)
    }

    const random=(min,max)=> { return Math.trunc(Math.random() * (max - min) + min)}

    return (
        <div className="list-group">
            <li className="list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center text-decoration-none" onClick={generateId}><span className="side-bar-text text-secondary">Random movie</span></li>
            <li className="list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center "><Link to={"/popular/1"}><span className="side-bar-text text-secondary">Popular</span></Link></li>
            <li className="list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center"><Link to={"/genres"}><span className="side-bar-text text-secondary">Genres</span></Link></li>

            {
                (props.credentials) ?
                    <>
                            <span className="list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center"><Link to={"/favorite"}><span className="side-bar-text text-secondary">Favorite</span></Link></span>
                    </> : <>
                            <span className="list-group-item sidebar list-group-item-action disabled d-flex justify-content-between align-items-center"><Link to={"/favorite"}><span className="side-bar-text text-secondary">Favorite</span></Link></span>
                    </>
            }
        </div>
    )
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {token,engineGetFavorite} = ownProps
    return {getFavoriteMovie:()=>FETCH_MOVIE(token,engineGetFavorite,dispatch)}}
export default Wrapper()(connect(null,mapDispatchToProps)(SideBar));
