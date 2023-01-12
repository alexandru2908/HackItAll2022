import React from "react";
import "../style/LoaderMic.css";

class LoaderMic extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log("loader mic");
    //         let loader = document.getElementsByClassName("containerLoaderMic")[0];
    //         loader.style.display = "none";
    //     }, 20000);
    // }

  render() {
    return (
      <div className="containerLoaderMic">
        <div className = "spinMic">
        </div>
      </div>
    );
  }
}

export default LoaderMic;