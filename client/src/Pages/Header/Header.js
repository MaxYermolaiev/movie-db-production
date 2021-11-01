import React, {useState} from "react";
import {useHistory} from "react-router";
import Wrapper from "../../Engine/Wrapper";
import "./Header.css"



const Header=(props)=>{


    const [buttons,setButtons]=useState("disabled");
    const [searchResults,setSearchResults] = useState([]);
    const [query,setQuery] = useState("");
    const history = useHistory()

    const searchHandler = (e,value) => {
        if(value.length>=2){
            setQuery(value)
            setButtons(null)
            setSearchResults([])
            props.engine.getBySearch(null,value)
                .then(data => {
                    let temp=[]
                    if (data.results.length===0){
                        temp.push(<li className="list-group-item" key={1}><small>No data of search</small></li>)
                    }else{
                        temp = data.results.map((item,index)=>{
                            return(<li className="list-group-item" key={index}
                                       onClick={()=>{
                                       fallingListCleaner(e)
                                       history.push(`/movie_detail/${item.id}`)
                            }}>{item.original_title}</li>)
                        })
                    }
                       setSearchResults(temp)
                   })
        }else{
            setQuery(value)
            setButtons("disabled")
            setSearchResults([])
        }
    }
    //after transmition to detail page of movie this function clear faling list
    const fallingListCleaner=(e)=>{
        e.target.value=""
        setSearchResults(null)
    }
    //go to searching result list
    const buttonHandler = (e) => {
        e.preventDefault()
        history.push(`/search/1/${query}`)
    }
    //login and auth handler
    const buttonAuthHandler = (e,event) => {
    if(event==="logout"){
        props.logout()
        history.push("/")
    }
    if(event==="login") {history.push("/authentication")}
    if(event==="register"){history.push("/registration")}
    }
    //render data
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            {
                                (!props.id&&!props.token)?<div className={"header-button"}>
                                    <button className="btn btn-primary my-2 my-sm-0 auth-btn" type="submit" onClick={(e)=>buttonAuthHandler(e,"login")}>Login</button>
                                    <span className={"m-1"}>or</span>
                                    <button className="btn btn-primary my-2 my-sm-0 auth-btn" type="submit"
                                                  onClick={(e)=>buttonAuthHandler(e,"register")}>Register</button>
                                </div> : <button className="btn btn-primary my-2 my-sm-0 auth-btn" type="submit"
                                                 onClick={(e)=>buttonAuthHandler(e,"logout")}>Logout</button>}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-sm-2 search-input" data-toggle="dropdown" type="text" placeholder="Type here" onChange={(e)=>searchHandler(e,e.target.value)}/>
                            <button className="btn btn-success my-2 my-sm-0 btn-search" type="button" disabled={buttons} onClick={buttonHandler}>Search</button>
                                <ul className="list-group-search" id="myList">
                                    {searchResults}
                                </ul>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }


export default Wrapper()(Header)