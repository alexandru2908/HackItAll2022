import React from "react";
import { Navigate } from "react-router-dom";
import "../style/LogIn.css";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            registered : false,
            username : "",
            password : "",
            logOK: false,
            link_server : "http://localhost:5000"
        })
        
        
    }
    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    async send_login_data()
    {
        let response = await fetch(this.state.link_server + "/login", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name: this.state.username,
                password: this.state.password
            })
        })
        response = await response.json();
        return response.error;
    }


    render() {
        if(this.state.registered)
        return(<Navigate to="/register" />)
        else if(this.state.logOK)
        return(<Navigate to="/cart" />)
        return (
            <div className="containerLogIn">
                <div className="pagina">
                    <div className="headerLog"><div className="scris">Login</div></div>
                    <div className="input1"> <input className="inputLog" type="text" placeholder="Username" name = "username" onChange={(e) => this.onChangeHandler(e)}></input> </div>
                    <div className="input2"> <input className="inputLog" type="password" placeholder="Password" password = "password" onChange={(e) => this.onChangeHandler(e)}></input> </div>
                    <div className="buton3"> <button className="buttonLog"  onClick={
                        async () => {
                            let error = await this.send_login_data();
                            console.log(error);
                            
                            if(!error)
                            {
                                localStorage.setItem("username", this.state.username);
                                
                                this.setState({logOK: true});
                            }
                        }
                    
                    }>Login</button> </div>
                    <div className="buton4"> <button className="buttonLog1" onClick = {() => {
                    this.setState({registered: true});
                    console.log(this.state.username);
                }}>Need an account?</button> </div>
                    
                </div>
            </div>
        );
    }
}

export default LogIn;