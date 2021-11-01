import React from "react";

const ErrorPage = (props) => {
    return (
        <div className="row d-flex">
            <div className={"row"}>
                <h1>Some terryfy error occured</h1>
                <h3>{`Error details: ${props?.message}`}</h3>
            </div>
            <div className={"row"}>
                <h1>Some terryfy error occured</h1>
                <h3>We`re working on it fixing</h3>
            </div>
        </div>
    );
};
export default ErrorPage