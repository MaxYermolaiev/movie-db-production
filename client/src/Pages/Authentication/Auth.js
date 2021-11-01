import React,{useState,useEffect,Component} from 'react';
import Wrapper from "../../Engine/Wrapper";
import {Validator} from "../../Engine/index";
import {useHistory} from "react-router";
import {ErrorPage} from "../index";
import "./AuthStyles.css"
class ErrorBoundary extends Component {
    state = {ErrorExist: false}
    componentDidCatch(error, errorInfo) {this.setState({ErrorExist: !this.state.ErrorExist})}
    render() {
        if (this.state.ErrorExist) {return <ErrorPage/>}
        return this.props.children;
    }
}

const Auth=(props)=>{
    const [form,setForm] = useState({email:"",password:""});
    const [disabled,setDisabled] = useState("disabled");
    const [validationErr,setValidationError] = useState({})
    const history=useHistory()
    //state to control page
    //use effect co check forms in all update
    useEffect(()=>{
        const validator= new Validator();
        let result = validator.validateLogin(form);
             setValidationError({...result})
        if(Object.keys(result).length===0){setDisabled(null);
            setValidationError({})
        }else{
            setValidationError({...result})
            setDisabled("disabled")}
    },[form])

    //on loginning this function login and dowland data
    const handleSubmit=(e)=>{
        e.preventDefault();

        const data = props.engine.request("https://yermolaiev-movie-db.herokuapp.com/api/login","POST",form,{})
        data.then(data=>{
            props.login(data.jwt,data.id)
            history.push("/popular/1")
            }
        ).catch((err)=>{
            let str = `some where occurred mistake - ${err}`
            setValidationError({email: str})
            })
    }

    return(
        <ErrorBoundary>
            <div className={"forms"}>
        <form>
            <fieldset>
                <legend ><h4 className={"text-secondary fw-bold"}>User authentication</h4></legend>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-3 fst-italic">Email address</label>
                    <input type="email" className="form-control auth-input" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"  onChange={(e)=>setForm({...form,email:e.target.value})}/>

                    <small className="auth-error text-danger fst-italic">{validationErr?.email&&form.email.length>1?validationErr.email:null}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="form-label mt-4 fst-italic">Password</label>
                    <input type="password" className="form-control auth-input" id="exampleInputPassword1" placeholder="Password" onChange={(e)=> setForm({...form, password: e.target.value}) }/>
                    <small className="auth-error text-danger fst-italic">{validationErr?.password&&form.password.length>1?validationErr.password:null}</small>
                </div>
                <button type="submit" className="btn btn-primary btn-registration mt-3" onClick={handleSubmit} disabled={disabled}>Submit</button>
            </fieldset>
        </form>
            </div>
        </ErrorBoundary>
    )
}
export default Wrapper()(Auth)


