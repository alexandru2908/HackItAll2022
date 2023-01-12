import '../App.css';
import Loader from './Loader.jsx';
import Header from './Header.jsx';
import TextPrincipal from './TextPrincipal.jsx';
import LogIn from './LogIn.jsx';
import React from 'react';
import Upload from './Upload';
import Output from "./Output";
import LoaderMic from './LoaderMic';
class StartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }
    render() {
        return (
            <div className="App">
                <Header></Header>
                <TextPrincipal></TextPrincipal>
                
                    <Loader></Loader>
                    {/* <LogIn></LogIn> */}
                
                <Upload></Upload>
                <LoaderMic></LoaderMic>
                <div className="chooseText">Choose one of the following three designs:</div>
                <Output></Output>
                

            </div>
        );
    }
}

export default StartPage;