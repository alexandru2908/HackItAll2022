import React from "react";
import "../style/Loader.css";

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            console.log("A trecut timpul");
            let loader = document.getElementsByClassName("containerLoader")[0];
            loader.style.display = "none";
        }, 1500);
    }

  render() {
    return (
      <div className="containerLoader">
        <div className = "spin">
        </div>
      </div>
    );
  }
}

export default Loader;