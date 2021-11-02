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
                        /*
                        <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
                         */
                    if (data.results.length===0){temp.push(<div class="p-2 bd-highlight" key={1}>No data of search</div>)
                    }else{
                        temp = data.results.map((item,index)=>{
                            return(<div class="p-2 bd-highlight" key={index}
                                       onClick={()=>{
                                       fallingListCleaner(e)
                                       history.push(`/movie_detail/${item.id}`)
                            }}>{item.original_title}</div>)
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
                            <div class="d-flex flex-column bd-highlight pos-absolute">
                                    {searchResults}
                                </div>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }


export default Wrapper()(Header)