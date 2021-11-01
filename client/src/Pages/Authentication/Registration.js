import React, {useEffect, useState,Component} from "react";
import Wrapper from "../../Engine/Wrapper";
import {Validator} from "../../Engine/index";
import {ErrorPage, Loading} from "../index";
import {useHistory} from "react-router";
import "./AuthStyles.css"
class ErrorBoundary extends Component {
    state = {ErrorExist: false}
    componentDidCatch(error, errorInfo) {this.setState({ErrorExist: !this.state.ErrorExist})}
    render() {
        if (this.state.ErrorExist) {return <ErrorPage/>}
        return this.props.children;
    }
}

function Registration(props){
    const [form,setForm] = useState({email:"",password:"",data:{city:"",phone:"",nick:""}})
    const [disabled,setDisabled] = useState("disabled")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(null)
    const validator = new Validator()
    const history=useHistory();

    useEffect(()=>{
        let result = validator.validateRegistartion(form);
        if(Object.keys(result).length===0){setDisabled(null)
        }else{setDisabled("disabled")}
    },[form])

    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true)
        const data = props.engine.request("https://yermolaiev-movie-db.herokuapp.com/api/registration","POST",form)
        data.then((data)=>{
            setLoading(false)
            setError(null)
            setSuccess({status:true,message:data.message,time:5})

            const promise = new Promise((resolve)=> {
                    let timer;
                    let timeout = setTimeout(()=>{
                        timer = setInterval(()=>setSuccess({...success, time: success.time - 1}),1000)
                    },5000)
                clearInterval(timer);
                clearTimeout(timeout)
                    resolve()

                }
            )

            promise.then((timer,timeout)=> {
                history.push("/authentication")
            })
        }).catch(err=>{
            setLoading(false)
            console.log(err)
            setError(err)})
    }

    if(success?.status){return(
        <>
            <h1>{`${success?.message}`}</h1>
            <h3>{`You will be redirected to login page via ${success.time} secconds...`}</h3>
        </>) }
    if(loading){return <Loading/>}
    return(
        <ErrorBoundary>
        <form>
            <fieldset>
                <legend><h4 className={"text-secondary fw-bold"}>Registration new user</h4></legend>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4 fst-italic fs-7">Email address</label>
                    <input type="email" className="form-control auth-input" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"  onChange={(e)=>setForm({...form,email:e.target.value})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-2 fst-italic fs-7">Password</label>
                    <input type="password" className="form-control auth-input" id="exampleInputPassword1" placeholder="Password"
                           onChange={(e)=>setForm({...form,password:e.target.value})}/>
                    <small id="passHelp" className="form-text text-muted">Pay attention-only digits.</small>
                </div>


                <div className="form-group">
                    <label htmlFor="inputDefault" className="col-form-label mt-2 fst-italic fs-7">Type your native city</label>
                    <input type="text" className="form-control auth-input" placeholder="Where are you from" id="inputDefault"
                           onChange={(e)=>setForm({...form,data: {...form.data, city:e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-2 fst-italic" htmlFor="inputDefault">Type your number</label>
                    <input type="text" className="form-control auth-input" placeholder="Phone number" id="inputDefault"
                           onChange={(e)=>setForm({...form,data: {...form.data,phone:e.target.value}})}
                    />
                    <small id="passHelp" className="form-text text-muted">Pay attention-start from +380.</small>
                </div>
                <div className="form-group">
                    <label className="col-form-label mt-2 fst-italic" htmlFor="inputDefault">Type your nickname</label>
                    <input type="text" className="form-control auth-input" placeholder="Nickname" id="inputDefault"
                           onChange={(e)=>setForm({...form,data: {...form.data,nick:e.target.value}})}/>
                </div>
                <button type="submit" className="btn btn-primary btn-registration mt-3" disabled={disabled} onClick={handleSubmit}>Register me!</button>
                {error?
                    <div className="alert alert-danger" role="alert">
                        {error}
                   </div>:null
                }

            </fieldset>
        </form>
        </ErrorBoundary>
       )
}

export default Wrapper()(Registration)


