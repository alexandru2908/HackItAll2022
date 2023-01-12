import React from "react";
import "../style/Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state=({
            toCart:false,
            toLogIn:false
        })
    }

    render() {
        if(this.state.toCart){
            window.location.href = "/cart";
        } else if(this.state.toLogIn){
            window.location.href = "/login";
        }
        return (
            <div className="containerHeader">
                <div className="containerLogo">
                    <div className="logo">
                    </div>
                </div>
                <div className="meniu">
                    <button className="Ceva" onclick={() => {
                        console.log("ceva")
                        this.setState({
                            toLogIn:true
                        })
                    }}>LogIn</button>
                    <div className="shopping">
                        <div className="cartImg"></div> 
                        <button className="Cart" onClick={() =>{
                            console.log("ceva")
                            this.setState({
                                toCart:true
                            })
                        }} >Cart</button>
                    </div>
                    <button className="Contact">Contact</button>
                </div>
            </div>
        );
    }
}

export default Header;