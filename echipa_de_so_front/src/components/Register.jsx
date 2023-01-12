import React from "react";
import "../style/LogIn.css";
import { Navigate } from "react-router-dom";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            LogIn : false,
            username : "",
            password : "",
            link_server : "http://localhost:5000"
    })
}
onChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

async send_register_data()
    {
        let response = await fetch(this.state.link_server + "/register", {
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

        if(this.state.LogIn)
        return(<Navigate to="/login" />)
        return (
            <div className="containerLogIn">
                <div className="pagina">
                    <div className="headerLog"><div className="scris">Register</div></div>
                    <div className="input1"> <input className="inputLog" type="text" placeholder="Username" name = "username" onChange={(e) => this.onChangeHandler(e)}></input> </div>
                    <div className="input2"> <input className="inputLog" type="password" placeholder="Password" password = "password" onChange={(e) => this.onChangeHandler(e)}></input> </div>
                    <div className="buton3"> <button className="buttonLog" onClick={    async () => {
                    
                        let error = await this.send_register_data();
                        console.log(error);
                        this.setState({LogIn: true});}
                    }>Register</button> </div>
                    <div className="buton4"> <button className="buttonLog1"  onClick = {() => {
                    this.setState({LogIn: true});
                    console.log(this.state.username);
                }} >Already have an account?</button> </div>
                    
                </div>
            </div>
        );
    }
}

export default LogIn;